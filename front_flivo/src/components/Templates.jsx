import React from "react";

const templates = [
  {
    title: "Enterprise Content Marketing Crew",
    description:
      "Conducts thorough research on topics to identify emerging trends...",
    tags: ["Serper API", "OpenAI"],
  },
  {
    title: "Generate PDF for Sales",
    description:
      "Analyzes lead company data, product alignment, and generates content...",
    tags: ["Serper API", "OpenAI"],
  },
];

const Templates = () => {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800 mb-4">Templates</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template, index) => (
          <div key={index} className="border rounded shadow p-4 bg-white">
            <h3 className="text-gray-800 font-bold mb-2">{template.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{template.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {template.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-100 text-gray-700 py-1 px-3 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600">
                Deploy
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
