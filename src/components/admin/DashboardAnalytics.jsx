import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const DashboardAnalytics = ({ fetchWithAdminAuth, postStatus, onSwitchTab, onViewApplication }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState("30d");

  useEffect(() => {
    loadAnalytics();
  }, [dateRange]);

  const loadAnalytics = async () => {
    setLoading(true);
    try {
      const { response, data, unauthorized } = await fetchWithAdminAuth(`${API_BASE_URL}/admin/analytics?range=${dateRange}`);
      if (unauthorized) return;
      if (!response.ok) throw new Error(data.message || "Failed to load analytics");
      setData(data);
    } catch (err) {
      postStatus(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const normalizeStatus = (status) => {
    if (status === "Pending") return "New";
    if (status === "Reviewing") return "Under Review";
    if (status === "Accepted") return "Hired";
    return status;
  };

  const getStatusColor = (status) => {
    const s = normalizeStatus(status);
    switch (s) {
      case 'New': return '#9ca3af'; // gray-400
      case 'Under Review': return '#3b82f6'; // blue-500
      case 'Interview': return '#eab308'; // yellow-500
      case 'Offer': return '#f97316'; // orange-500
      case 'Hired': return '#22c55e'; // green-500
      case 'Rejected': return '#ef4444'; // red-500
      default: return '#9ca3af';
    }
  };

  // Calculate total apps for the donut chart center
  const totalAppsForDonut = data?.pipelineBreakdown?.reduce((sum, item) => sum + item.count, 0) || 0;

  if (loading || !data) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1E90FF]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 cabin-400">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome back, Admin!</h2>
          <p className="text-sm text-gray-500">Here is an overview of candidate activity.</p>
        </div>
        <select 
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="bg-white border border-gray-300 text-gray-700 text-sm py-2 px-4 outline-none focus:border-[#1E90FF]"
        >
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last Quarter</option>
          <option value="ytd">Year to Date</option>
          <option value="all">All Time</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border-y border-r border-l-4 border-l-green-500 border-gray-200 p-5 shadow-sm relative overflow-hidden">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Hires This Month</p>
          <p className="text-4xl font-bold text-gray-900">{data.hiresThisMonth}</p>
          <svg className="absolute bottom-4 right-4 w-16 h-8 text-blue-400" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
            <path d="M0,35 L20,30 L40,35 L60,15 L80,20 L100,5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div 
          onClick={() => onSwitchTab('applications')}
          className="bg-white border-y border-r border-l-4 border-l-blue-500 border-gray-200 p-5 shadow-sm relative cursor-pointer hover:shadow-md hover:bg-gray-50 transition-all"
        >
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">New Apps (24h)</p>
          <p className="text-4xl font-bold text-gray-900">{data.newApplications24h}</p>
          <svg className="absolute top-5 right-5 w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
          </svg>
        </div>

        <div className="bg-white border-y border-r border-l-4 border-l-yellow-500 border-gray-200 p-5 shadow-sm relative">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Open Positions</p>
          <p className="text-4xl font-bold text-gray-900">{data.openPositions}</p>
          <div className="absolute top-6 right-6 w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <div className="bg-white border-y border-r border-l-4 border-l-purple-500 border-gray-200 p-5 shadow-sm relative">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Avg. Time-To-Hire</p>
          <p className="text-4xl font-bold text-gray-900">
            {data.avgTimeToHire} <span className="text-lg font-normal text-gray-500">Days</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-gray-200 shadow-sm flex flex-col">
          <div className="p-5 border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-900">Priority: New Applications</h3>
          </div>
          <div className="flex-1 p-0 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                <tr>
                  <th className="px-5 py-3 font-semibold">Candidate</th>
                  <th className="px-5 py-3 font-semibold">Job Role</th>
                  <th className="px-5 py-3 font-semibold">Applied</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.topNewApplications.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-8 text-gray-500">No new applications</td>
                  </tr>
                ) : (
                  data.topNewApplications.map((app) => (
                    <tr key={app._id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                            {app.candidateName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{app.candidateName}</p>
                            <p className="text-xs text-gray-500">{app.candidateEmail}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3 text-gray-600">{app.jobId?.title || 'N/A'}</td>
                      <td className="px-5 py-3 text-gray-500">
                        {new Date(app.appliedAt).toLocaleDateString()}
                      </td>
                      <td className="px-5 py-3">
                        <span className="px-2.5 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-sm uppercase tracking-wider">
                          {normalizeStatus(app.status)}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-right">
                        <button 
                          onClick={() => onViewApplication(app)}
                          className="text-[#1E90FF] hover:text-[#1570d1] text-sm font-semibold flex items-center justify-end gap-1 w-full"
                        >
                          View <span>→</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-gray-200 shadow-sm flex flex-col">
          <div className="p-5 border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-900">Pipeline Status</h3>
          </div>
          <div className="flex-1 p-5 flex flex-col items-center justify-center min-h-[300px]">
            {data.pipelineBreakdown.length === 0 ? (
              <p className="text-gray-500 text-sm">No pipeline data</p>
            ) : (
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={data.pipelineBreakdown}
                    cx="50%"
                    cy="45%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="count"
                  >
                    {data.pipelineBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getStatusColor(entry.status)} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value, name, props) => [`${value} (${props.payload.percentage}%)`, props.payload.status]} 
                  />
                  <Legend 
                    layout="horizontal" 
                    verticalAlign="bottom" 
                    align="center"
                    iconType="circle"
                    wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                    formatter={(value, entry) => {
                      const item = data.pipelineBreakdown.find(d => normalizeStatus(d.status) === normalizeStatus(entry.payload.status));
                      return <span className="text-gray-600">{normalizeStatus(entry.payload.status)} ({item?.percentage || 0}%)</span>;
                    }}
                    payload={data.pipelineBreakdown.map(item => ({
                      value: normalizeStatus(item.status),
                      type: 'circle',
                      color: getStatusColor(item.status),
                      payload: item
                    }))}
                  />
                  
                  {/* Center Text */}
                  <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle">
                    <tspan x="50%" dy="-5" fontSize="24" fontWeight="bold" fill="#111827">
                      {totalAppsForDonut}
                    </tspan>
                    <tspan x="50%" dy="20" fontSize="12" fill="#6B7280">
                      Total Apps
                    </tspan>
                  </text>
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white border border-gray-200 shadow-sm flex flex-col">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-900">Recent Hires</h3>
          </div>
          <div className="p-5">
            {(!data.recentHires || data.recentHires.length === 0) ? (
              <p className="text-gray-500 text-sm text-center py-4">No recent hires</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.recentHires.map(hire => (
                  <div key={hire._id} className="border border-gray-100 p-4 rounded-md flex items-center gap-4 hover:shadow-sm transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm shrink-0">
                      {hire.candidateName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 truncate">{hire.candidateName}</p>
                      <p className="text-xs text-gray-500 truncate">{hire.jobId?.title || 'Unknown Role'}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalytics;
