import React from 'react';

interface Plan {
  name: string;
  price: string;
  features: string[];
}

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700">{plan.name}</h2>
      <div className="mt-4 bg-indigo-100 p-4 rounded-lg">
        <p className="text-3xl font-semibold text-indigo-500">{plan.price}</p>
        <p className="text-md text-gray-500">per month</p>
      </div>
      <ul className="mt-4 space-y-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="h-4 w-4 fill-current text-indigo-500 mr-2" viewBox="0 0 24 24">
              <path d="M9 11H7a4 4 0 0 1 4-4v2a2 2 0 0 0-2 2zm6 2h2a2 2 0 0 0-2-2v2a4 4 0 0 1 4 4h-2a2 2 0 0 0-2-2zm-6 0a2 2 0 0 0 2 2v2a4 4 0 0 1-4-4h2zm6-6a2 2 0 0 0-2 2H9a4 4 0 0 1 4-4v2z"></path>
            </svg>
            <p className="text-gray-600">{feature}</p>
          </li>
        ))}
      </ul>
      <button className="mt-8 px-8 py-2 bg-indigo-500 text-white text-sm font-medium rounded hover:bg-indigo-400">Sign Up</button>
    </div>
  );
};

export default PricingCard;