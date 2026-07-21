import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const ApplicationModal = ({ job, isOpen, onClose }) => {
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [dynamicResponses, setDynamicResponses] = useState({});
  const [cvFile, setCvFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [activeTab, setActiveTab] = useState("details"); // 'details' | 'apply'
  const [isDragging, setIsDragging] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset form when modal closes
      setCandidateName("");
      setCandidateEmail("");
      setDynamicResponses({});
      setCvFile(null);
      setStatusMessage("");
      setStatusType("");
      setActiveTab("details");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, job]);

  if (!isOpen || !job) return null;

  const handleFieldChange = (label, value) => {
    setDynamicResponses((prev) => ({ ...prev, [label]: value }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setCvFile(e.dataTransfer.files[0]);
    }
  };

  const handleApply = async (event) => {
    event.preventDefault();
    if (!cvFile) {
      setStatusType("error");
      setStatusMessage("Please attach your CV.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");
    try {
      const formData = new FormData();
      formData.append("jobId", job._id);
      formData.append("candidateName", candidateName);
      formData.append("candidateEmail", candidateEmail);
      formData.append("responses", JSON.stringify(dynamicResponses));
      formData.append("cv", cvFile);

      const response = await fetch(`${API_BASE_URL}/apply`, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Failed to submit application");
      }

      setStatusType("success");
      setStatusMessage("Application submitted successfully! We'll be in touch soon.");
      
      // Auto-close after success
      setTimeout(() => {
        if (isOpen) onClose();
      }, 4000);
    } catch (error) {
      setStatusType("error");
      setStatusMessage(error.message || "Could not submit application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal drawer */}
      <div className="relative w-full max-w-2xl h-full bg-white shadow-2xl flex flex-col transform transition-transform duration-300 translate-x-0 overflow-y-auto">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-(--color-dark) cabin-400 pr-4 truncate">
            {job.title.replace(/^\[TEST\]\s*/i, "")}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Stepper Header */}
        {statusType !== "success" && (
          <div className="flex border-b border-gray-200 px-6 py-4 bg-gray-50 sticky top-[69px] z-10 items-center justify-between">
            <div className="flex items-center w-full">
              <div 
                className={`flex items-center gap-2 cursor-pointer transition-colors ${activeTab === "details" ? "text-[#1E90FF]" : "text-gray-400 hover:text-gray-600"}`}
                onClick={() => setActiveTab("details")}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeTab === "details" ? "bg-[#1E90FF] text-white" : "bg-gray-200 text-gray-600"}`}>
                  1
                </div>
                <span className="text-sm font-semibold hidden sm:inline">Job Details</span>
              </div>
              
              <div className="flex-1 h-px bg-gray-300 mx-4"></div>
              
              <div 
                className={`flex items-center gap-2 cursor-pointer transition-colors ${activeTab === "apply" ? "text-[#1E90FF]" : "text-gray-400 hover:text-gray-600"}`}
                onClick={() => setActiveTab("apply")}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeTab === "apply" ? "bg-[#1E90FF] text-white" : "bg-gray-200 text-gray-600"}`}>
                  2
                </div>
                <span className="text-sm font-semibold hidden sm:inline">Application</span>
              </div>
              
              <div className="flex-1 h-px bg-gray-300 mx-4"></div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-gray-200 text-gray-600">
                  3
                </div>
                <span className="text-sm font-semibold hidden sm:inline">Submit</span>
              </div>
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 p-6 bg-white overflow-y-auto">
          {activeTab === "details" ? (
            <div className="animate-in fade-in duration-300">
              <div className="flex flex-wrap gap-2 mb-6 text-sm">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md font-medium border border-blue-100">
                  {job.type}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md font-medium border border-gray-200">
                  {job.location}
                </span>
              </div>
              
              <div 
                className="prose prose-sm md:prose-base max-w-none text-gray-600 prose-headings:text-(--color-dark) prose-a:text-(--color-primary)"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job.description || "") }}
              />
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button
                  onClick={() => setActiveTab("apply")}
                  className="w-full sm:w-auto bg-(--color-primary) hover:bg-(--color-primary-dark) text-white px-8 py-3 rounded-md font-semibold transition-colors"
                >
                  Start Application
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in duration-300">
              {statusType === "success" ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                  <p className="text-gray-500 max-w-sm mx-auto mb-8">
                    Thank you for applying to the <span className="font-semibold text-gray-700">{job.title}</span> position. We've received your application and will be in touch soon.
                  </p>
                  <button 
                    onClick={onClose}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-md transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={candidateName}
                        onChange={(e) => setCandidateName(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={candidateEmail}
                        onChange={(e) => setCandidateEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  {job.formSchema?.map((field) => (
                    <div key={field.label}>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      {field.fieldType === "dropdown" ? (
                        <select
                          required={field.required}
                          value={dynamicResponses[field.label] ?? ""}
                          onChange={(e) => handleFieldChange(field.label, e.target.value)}
                          className="w-full appearance-none border border-gray-300 rounded-md px-4 py-2.5 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 bg-white bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-[length:1em_1em]"
                        >
                          <option value="">Select an option</option>
                          {field.options?.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.fieldType}
                          required={field.required}
                          value={dynamicResponses[field.label] ?? ""}
                          onChange={(e) => handleFieldChange(field.label, e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20"
                          placeholder={`Enter ${field.label.toLowerCase()}`}
                        />
                      )}
                    </div>
                  ))}

                  <div className="pt-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-2">
                      Upload Resume/CV <span className="text-red-500">*</span>
                    </label>
                    <div 
                      className={`relative border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition-colors overflow-hidden ${isDragging ? "border-[#1E90FF] bg-[#1E90FF]/10" : "border-gray-300 bg-gray-50 hover:bg-gray-100"}`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required={!cvFile}
                        onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        title="Click to upload or drag and drop"
                      />
                      {cvFile ? (
                        <div className="text-center w-full flex flex-col items-center">
                          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 mb-3">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <p className="text-sm font-semibold text-gray-900 truncate max-w-[200px]">
                            {cvFile.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {(cvFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to upload
                          </p>
                          <button 
                            type="button" 
                            onClick={(e) => { e.preventDefault(); setCvFile(null); }}
                            className="mt-3 text-xs text-red-500 hover:text-red-700 font-medium relative z-20"
                          >
                            Remove file
                          </button>
                        </div>
                      ) : (
                        <>
                          <p className="text-sm text-gray-600 mb-1">
                            <span className="font-semibold text-[#1E90FF]">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-(--color-primary) hover:bg-(--color-primary-dark) text-white px-8 py-2.5 rounded-md text-sm font-semibold transition-colors disabled:opacity-70 flex items-center justify-center min-w-[140px]"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
