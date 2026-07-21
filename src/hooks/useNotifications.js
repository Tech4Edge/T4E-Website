import { useState, useEffect } from "react";
import Pusher from "pusher-js";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const useNotifications = (isAuthenticated, fetchWithAdminAuth) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const fetchNotifications = async () => {
    try {
      const { response, data } = await fetchWithAdminAuth(`${API_BASE_URL}/admin/notifications`);
      if (response.ok) {
        setNotifications(data.notifications || []);
        setUnreadCount(data.unreadCount || 0);
      }
    } catch (err) {
      console.error("Failed to fetch notifications:", err);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      setNotifications([]);
      setUnreadCount(0);
      return;
    }

    // Initial fetch from DB
    fetchNotifications();

    // Initialize Pusher
    const pusherKey = import.meta.env.VITE_PUSHER_KEY;
    const pusherCluster = import.meta.env.VITE_PUSHER_CLUSTER;
    
    if (!pusherKey || !pusherCluster) {
      console.warn("Pusher credentials missing, real-time push disabled");
      return;
    }

    const pusher = new Pusher(pusherKey, {
      cluster: pusherCluster,
    });

    const channel = pusher.subscribe("admin-channel");
    channel.bind("new_application", (data) => {
      const newNotif = {
        _id: data.notificationId || Date.now().toString(),
        type: "new_application",
        title: "New Application",
        message: `${data.candidateName} applied for ${data.jobTitle}`,
        isRead: false,
        createdAt: data.appliedAt || new Date().toISOString()
      };
      setNotifications(prev => [newNotif, ...prev].slice(0, 50));
      setUnreadCount(prev => prev + 1);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
      pusher.disconnect();
    };
  }, [isAuthenticated]);

  const markAllRead = async () => {
    setUnreadCount(0);
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
    try {
      await fetchWithAdminAuth(`${API_BASE_URL}/admin/notifications/read-all`, { method: "PATCH" });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteOne = async (id) => {
    setNotifications(prev => prev.filter(n => n._id !== id));
    try {
      await fetchWithAdminAuth(`${API_BASE_URL}/admin/notifications/${id}`, { method: "DELETE" });
      fetchNotifications();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteAll = async () => {
    setNotifications([]);
    setUnreadCount(0);
    try {
      await fetchWithAdminAuth(`${API_BASE_URL}/admin/notifications`, { method: "DELETE" });
    } catch (err) {
      console.error(err);
    }
  };

  return { notifications, unreadCount, markAllRead, deleteOne, deleteAll };
};
