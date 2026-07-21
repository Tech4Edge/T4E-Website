import React, { useState } from "react";
import NotificationsPanel from "./NotificationsPanel";

const AdminLayout = ({ 
  activeTab, 
  onTabChange, 
  onLogout,
  globalSearch,
  onGlobalSearchChange,
  onGlobalSearchSubmit,
  notifications,
  unreadCount,
  markAllRead,
  deleteNotification,
  deleteAllNotifications,
  children 
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )},
    { id: "applications", label: "Candidates", icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )},
    { id: "jobs", label: "Jobs", icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )}
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden cabin-400">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0F172B] text-gray-300 flex flex-col justify-between shrink-0">
        <div>
          <div className="p-6">
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <svg className="w-6 h-6 text-[#1E90FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Tech4Edges
            </h1>
            <p className="text-xs mt-1 text-gray-400">Admin Terminal</p>
          </div>
          
          <nav className="mt-6 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-white text-[#0F172B]"
                    : "hover:bg-white/10"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          <button 
            onClick={() => {
              onTabChange("jobs");
              // A slight hack to trigger "create job" mode if needed, but for now just navigate
            }}
            className="w-full bg-[#1E90FF] hover:bg-[#1570d1] text-white py-2 flex justify-center items-center gap-2 font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Post New Job
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <h2 className="text-xl font-semibold text-gray-800">Admin ATS</h2>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                value={globalSearch}
                onChange={(e) => onGlobalSearchChange(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onGlobalSearchSubmit()}
                placeholder="Search candidates, jobs..." 
                className="pl-9 pr-4 py-1.5 bg-gray-100 border-none outline-none text-sm w-64 focus:ring-2 focus:ring-[#1E90FF]/20"
              />
            </div>
            
            <div className="flex items-center gap-4 text-gray-500">
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="hover:text-gray-800 transition-colors relative"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  )}
                </button>
                
                {showNotifications && (
                  <NotificationsPanel 
                    notifications={notifications}
                    markAllRead={markAllRead}
                    deleteOne={deleteNotification}
                    deleteAll={deleteAllNotifications}
                    onClose={() => setShowNotifications(false)}
                  />
                )}
              </div>
              <button onClick={onLogout} className="hover:text-gray-800 transition-colors" title="Logout">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main Area */}
        <main className="flex-1 overflow-auto p-8 relative">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
