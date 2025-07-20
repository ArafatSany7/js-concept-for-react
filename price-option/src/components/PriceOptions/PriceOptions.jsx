import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 free fitness assessment",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 49.99,
      features: [
        "All Basic Plan features",
        "Group fitness classes",
        "1 guest pass per month",
        "Free Wi-Fi",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 69.99,
      features: [
        "All Standard Plan features",
        "Unlimited guest passes",
        "Sauna and steam room access",
        "2 personal training sessions/month",
      ],
    },
    {
      id: 4,
      name: "Student Plan",
      price: 24.99,
      features: [
        "Access to gym equipment",
        "Group classes (off-peak hours)",
        "Student-only hours",
        "1 guest pass per semester",
      ],
    },
    {
      id: 5,
      name: "Family Plan",
      price: 99.99,
      features: [
        "Access for 2 adults + 2 children",
        "Group classes for all members",
        "Free child care",
        "1 personal training session per adult",
      ],
    },
  ];

  return (
    <div className=" m-8">
      <h2 className="text-5xl">Best price in the world</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {pricingOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
