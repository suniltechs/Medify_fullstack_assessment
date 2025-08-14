import { motion } from 'framer-motion';
import { Button } from '../ui/Button'; 

const PricingSection = () => {

  const plans = [
    {
      name: "Starter",
      price: "29",
      period: "month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 100 products",
        "Basic analytics",
        "Email support",
        "1 team member"
      ],
      featured: false
    },
    {
      name: "Professional",
      price: "79",
      period: "month",
      description: "For growing businesses with more needs",
      features: [
        "Up to 1000 products",
        "Advanced analytics",
        "Priority email support",
        "Up to 5 team members",
        "API access"
      ],
      featured: true
    },
    {
      name: "Enterprise",
      price: "199",
      period: "month",
      description: "For large businesses with complex needs",
      features: [
        "Unlimited products",
        "Advanced analytics + reports",
        "24/7 phone support",
        "Unlimited team members",
        "API access",
        "Custom integrations"
      ],
      featured: false
    }
  ];

  return (
    <section className="py-16 bg-white pricing-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Simple, Transparent <span className="text-accent-light">Pricing</span>
          </h2>
          <p className="text-lg text-primary-light max-w-2xl mx-auto">
            Choose the plan that works best for your business needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={plan.featured ? { y: -10, scale: 1.02 } : { y: -5 }}
              className={`pricing-card relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${
                plan.featured ? 'border-2 border-accent-light' : 'border border-secondary-default'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-accent-light text-white px-4 py-1 text-sm font-semibold">
                  Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary-dark mb-2">
                  {plan.name}
                </h3>
                <p className="text-primary-light mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-dark">
                    ${plan.price}
                  </span>
                  <span className="text-primary-light">/{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-accent-light mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-primary-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={plan.featured ? 'primary' : 'outline'}
                  size="large"
                  fullWidth
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;