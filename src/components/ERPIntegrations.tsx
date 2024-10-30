import { Card } from "@/components/ui/card";

const ERPIntegrations = () => {
  const integrations = [
    {
      name: "SAP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
      description: "Seamless integration with SAP ERP systems"
    },
    {
      name: "Business Central",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Microsoft_Dynamics_365_Logo.svg",
      description: "Full compatibility with Microsoft Business Central"
    },
    {
      name: "Odoo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Odoo_logo.svg",
      description: "Direct connection with Odoo ERP"
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Enterprise Integration</h2>
          <p className="text-xl text-gray-600">
            Seamlessly connect with your existing ERP systems for automated inventory management
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <Card key={index} className="p-6 flex flex-col items-center text-center animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <img 
                src={integration.logo} 
                alt={`${integration.name} logo`} 
                className="h-12 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">{integration.name}</h3>
              <p className="text-gray-600">{integration.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ERPIntegrations;