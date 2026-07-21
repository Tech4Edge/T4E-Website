import React from "react";

const NotificationsPanel = ({ notifications, markAllRead, deleteOne, deleteAll, onClose }) => {
  return (
    <div className="absolute top-12 right-0 w-80 bg-white border border-gray-200 shadow-xl rounded-md overflow-hidden z-[100] cabin-400">
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100 bg-gray-50">
        <h3 className="font-semibold text-gray-800 text-sm">Notifications</h3>
        <div className="flex gap-2">
          {notifications.length > 0 && (
            <>
              <button onClick={markAllRead} className="text-xs text-[#1E90FF] hover:underline">
                Mark all read
              </button>
              <button onClick={deleteAll} className="text-xs text-red-500 hover:underline ml-2">
                Clear all
              </button>
            </>
          )}
        </div>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-6 text-center">
            <svg className="w-12 h-12 text-gray-300 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <p className="text-sm text-gray-500">No notifications yet</p>
          </div>
        ) : (
          notifications.map(notif => (
            <div key={notif._id} className={`p-4 border-b border-gray-50 flex gap-3 group relative ${notif.isRead ? 'bg-white' : 'bg-blue-50/30'}`}>
              {!notif.isRead && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1E90FF]"></div>
              )}
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1 pr-6">
                <p className="text-xs text-gray-800 leading-snug">{notif.message}</p>
                <p className="text-[10px] text-gray-400 mt-1">
                  {new Date(notif.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(notif.createdAt).toLocaleDateString()}
                </p>
              </div>
              <button 
                onClick={() => deleteOne(notif._id)}
                className="absolute right-3 top-4 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationsPanel;
