import React from "react";

const PreviewModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 z-[150] bg-black/40 transition-opacity duration-200 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-2xl flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-5 border-b border-gray-200 shrink-0">
          <h3 className="text-xl font-bold text-[#0F172B] cabin-400">
            Preview: {job.title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="overflow-y-auto p-6 space-y-8 flex-1">
          {/* Header Info */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 cabin-400">
            <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-sm">
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {job.department || "General"}
            </div>
            <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-sm">
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {job.location || "Anywhere"}
            </div>
            <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-sm">
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {job.type || "Full-time"}
            </div>
          </div>

          <div className="prose prose-sm max-w-none text-gray-800 cabin-400" dangerouslySetInnerHTML={{ __html: job.description }} />

          <hr className="border-gray-200" />
          
          <div>
            <h4 className="text-lg font-bold text-[#0F172B] cabin-400 mb-4">Application Form Fields</h4>
            <div className="space-y-4">
              {job.formSchema?.map((field, i) => (
                <div key={i} className="border border-gray-200 p-4 bg-gray-50 rounded-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-800">{field.label}</span>
                    {field.required && <span className="text-xs text-red-500 font-bold">*</span>}
                    <span className="text-xs text-gray-500 ml-auto uppercase tracking-wider">{field.fieldType}</span>
                  </div>
                  {field.fieldType === "dropdown" ? (
                    <select disabled className="w-full bg-white border border-gray-300 px-3 py-2 text-sm text-gray-500">
                      <option>Select...</option>
                      {field.options?.map((opt, j) => <option key={j}>{opt}</option>)}
                    </select>
                  ) : field.fieldType === "file" ? (
                    <div className="border-2 border-dashed border-gray-300 p-4 text-center text-sm text-gray-400 bg-white">
                      Drop file here or click to upload
                    </div>
                  ) : (
                    <input disabled placeholder="Text input" className="w-full bg-white border border-gray-300 px-3 py-2 text-sm text-gray-500" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5 border-t border-gray-200 shrink-0 flex justify-end gap-3 bg-gray-50">
          <button
            type="button"
            onClick={onClose}
            className="border border-gray-300 text-gray-700 px-6 py-2 text-sm font-semibold cabin-400 hover:bg-white"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
