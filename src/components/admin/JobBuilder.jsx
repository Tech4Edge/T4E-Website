import React from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const quillModules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    ["clean"],
  ],
};

const JobBuilder = ({
  jobForm,
  updateJobForm,
  dynamicFields,
  updateDynamicField,
  addField,
  removeField,
  resetJobBuilder,
  submitJob,
  isCreatingJob,
  editingJobId,
}) => {
  return (
    <form className="space-y-5" onSubmit={submitJob}>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs mb-1 text-(--color-gray-600) cabin-400">
            Job Title
          </label>
          <input
            required
            value={jobForm.title}
            onChange={(event) => updateJobForm("title", event.target.value)}
            className="w-full border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400"
          />
        </div>
        <div>
          <label className="block text-xs mb-1 text-(--color-gray-600) cabin-400">
            Location
          </label>
          <input
            value={jobForm.location}
            onChange={(event) => updateJobForm("location", event.target.value)}
            className="w-full border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400"
          />
        </div>
        <div>
          <label className="block text-xs mb-1 text-(--color-gray-600) cabin-400">
            Type
          </label>
          <input
            value={jobForm.type}
            placeholder="Full-time / Remote / Hybrid"
            onChange={(event) => updateJobForm("type", event.target.value)}
            className="w-full border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-(--color-dark) cabin-400 mt-6">
          <input
            type="checkbox"
            checked={jobForm.isActive}
            onChange={(event) => updateJobForm("isActive", event.target.checked)}
          />
          Active Job Posting
        </label>
      </div>

      <div>
        <label className="block text-xs mb-1 text-(--color-gray-600) cabin-400">
          Job Description
        </label>
        <ReactQuill
          theme="snow"
          value={jobForm.description}
          onChange={(value) => updateJobForm("description", value)}
          modules={quillModules}
          className="bg-white cabin-400"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-(--color-dark) cabin-400">
            Dynamic Form Schema
          </h3>
          <button
            type="button"
            onClick={addField}
            className="text-(--color-primary) border border-(--color-primary) hover:bg-(--color-primary) hover:text-white px-3 py-1 text-xs transition-colors duration-200 cabin-400"
          >
            Add Field
          </button>
        </div>

        {dynamicFields.map((field, index) => (
          <div
            key={`${index}-${field.label}`}
            className="border border-gray-200 p-4 bg-gray-50"
          >
            <div className="grid md:grid-cols-12 gap-3">
              <div className="md:col-span-4">
                <label className="block text-xs mb-1 text-(--color-gray-600) cabin-400">
                  Label
                </label>
                <input
                  value={field.label}
                  onChange={(event) =>
                    updateDynamicField(index, "label", event.target.value)
                  }
                  className="w-full border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400 bg-white"
                />
              </div>
              <div className="md:col-span-3">
                <label className="block text-xs mb-1 text-(--color-gray-600) cabin-400">
                  Type
                </label>
                <select
                  value={field.fieldType}
                  onChange={(event) =>
                    updateDynamicField(index, "fieldType", event.target.value)
                  }
                  className="w-full border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400 bg-white"
                >
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                  <option value="email">Email</option>
                  <option value="file">File</option>
                  <option value="dropdown">Dropdown</option>
                </select>
              </div>
              <div className="md:col-span-4">
                <label className="block text-xs mb-1 text-(--color-gray-600) cabin-400">
                  Dropdown Options
                </label>
                <input
                  value={field.optionsText}
                  disabled={field.fieldType !== "dropdown"}
                  onChange={(event) =>
                    updateDynamicField(index, "optionsText", event.target.value)
                  }
                  placeholder="Immediate, 15 days, 30 days"
                  className="w-full border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400 bg-white disabled:bg-gray-100"
                />
              </div>
              <div className="md:col-span-1 flex items-end justify-end gap-2">
                <label className="flex items-center gap-1 text-xs cabin-400 text-(--color-dark)">
                  <input
                    type="checkbox"
                    checked={field.required}
                    onChange={(event) =>
                      updateDynamicField(index, "required", event.target.checked)
                    }
                  />
                  Req
                </label>
                {dynamicFields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeField(index)}
                    className="text-red-600 border border-red-300 px-2 py-1 text-xs cabin-400 hover:bg-red-50"
                  >
                    X
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={resetJobBuilder}
          className="border border-gray-300 text-(--color-dark) hover:bg-gray-50 px-5 py-2 text-sm font-semibold transition-colors duration-200 cabin-400"
        >
          Clear Form
        </button>
        <button
          type="submit"
          disabled={isCreatingJob}
          className="bg-(--color-primary) hover:bg-(--color-primary-dark) text-white px-6 py-2 text-sm font-semibold transition-colors duration-200 cabin-400"
        >
          {isCreatingJob
            ? editingJobId
              ? "Updating..."
              : "Creating..."
            : editingJobId
              ? "Update Job"
              : "Create Job"}
        </button>
      </div>
    </form>
  );
};

export default JobBuilder;
