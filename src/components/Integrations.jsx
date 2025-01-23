import React from "react";

const Integrations = () => {
  const integrations = [
    {
      name: "Slack",
      description: "Activate crews directly within Slack with simple commands",
      buttonLabel: "Connect",
      icon: "https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png", // Correct Slack logo
    },
    {
      name: "HubSpot",
      description: "Automate crew activation with powerful HubSpot workflows",
      buttonLabel: "Connect",
      icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/168_Hubspot_logo_logos-512.png", // Correct HubSpot logo
    },
    {
      name: "Zapier",
      description:
        "Trigger crews and automate workflows with Zapier and CrewAI",
      buttonLabel: "Open",
      icon: "https://birkman.nyc3.cdn.digitaloceanspaces.com/production/assets/company-logos/Zapier-Logo.png", // Correct Zapier logo
    },
  ];

  const IntegrationCard = ({ name, description, buttonLabel, icon }) => (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center border border-gray-300">
      <img
        src={icon}
        alt={`${name} logo`}
        className="h-16 w-16 mb-4 object-contain"
        width="64"
        height="64"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4 text-center">{description}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        {buttonLabel}
      </button>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Discover Our Integrations</h1>
        <p className="text-lg text-gray-600">
          Seamlessly connect with your favorite tools to streamline your
          workflows and boost productivity.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {integrations.map((integration) => (
          <IntegrationCard key={integration.name} {...integration} />
        ))}
      </div>
    </div>
  );
};

export default Integrations;
