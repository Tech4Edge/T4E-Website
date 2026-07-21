import React from "react";

const AdminLoginScreen = ({ loginForm, setLoginForm, isLoggingIn, handleLogin }) => {
  return (
    <div className="min-h-screen bg-[#0b0a33] flex flex-col justify-center items-center cabin-400 p-4 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20" 
        style={{
          backgroundImage: "linear-gradient(#1E90FF 1px, transparent 1px), linear-gradient(90deg, #1E90FF 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="w-full max-w-md bg-white shadow-2xl relative z-10 overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#0F172B] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#1E90FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Admin Secure Login</h1>
            <p className="text-sm text-gray-500 mt-2">Manage your ATS workspace</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-500 tracking-wider mb-2">
                EMAIL ADDRESS / USERNAME
              </label>
              <div className="relative">
                <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  required
                  value={loginForm.username}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 outline-none focus:border-[#1E90FF] focus:bg-white text-sm transition-colors"
                  placeholder="admin@tech4edges.com"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-semibold text-gray-500 tracking-wider">
                  PASSWORD
                </label>
                <button type="button" className="text-xs text-[#1E90FF] hover:underline font-medium">
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  type="password"
                  required
                  value={loginForm.password}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-10 py-2.5 bg-gray-50 border border-gray-200 outline-none focus:border-[#1E90FF] focus:bg-white text-sm transition-colors"
                  placeholder="••••••••"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-[#1E90FF] hover:bg-[#1570d1] text-white py-3 font-medium flex justify-center items-center gap-2 transition-colors mt-2"
            >
              {isLoggingIn ? "LOGGING IN..." : "LOG IN TO DASHBOARD"}
              {!isLoggingIn && (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </button>
          </form>
        </div>
        
        <div className="bg-gray-50 py-3 text-center border-t border-gray-100">
          <p className="text-xs text-gray-500 font-medium">Tech4Edges Internal Access Only</p>
        </div>
      </div>
      
      <p className="mt-8 text-xs text-white/50 relative z-10">
        Secured by Enterprise Authentication
      </p>
    </div>
  );
};

export default AdminLoginScreen;
