import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content: "This platform has completely transformed how we manage our product catalog. The intuitive interface and powerful features have saved us countless hours.",
      avatar: "https://i.pinimg.com/736x/d1/81/e4/d181e44cf0a7d5f9190bc96939da4164.jpg"
    },
    {
      name: "Michael Chen",
      role: "Operations Director at RetailPlus",
      content: "The analytics alone are worth the price. We've been able to identify underperforming products and optimize our inventory like never before.",
      avatar: "https://i.pinimg.com/736x/7e/46/c6/7e46c6d2798eff446b365c5246f4c9ca.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Specialist",
      content: "As someone who's used several product management tools, this one stands out for its simplicity and depth. The team collaboration features are exceptional.",
      avatar: "https://i.pinimg.com/736x/0a/d1/93/0ad19309a59be71b028548801ac38353.jpg"
    }
  ];

  return (
    <section className="py-20 rounded-xl bg-primary-light/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent-light text-sm font-semibold mb-3">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Trusted by <span className="text-accent-light">Industry Leaders</span>
          </h2>
          <p className="text-lg text-primary-light/80 max-w-2xl mx-auto">
            Hear from professionals who transformed their workflow with our platform
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="h-full bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group-hover:border-accent-light/20">
                <div className="mb-6 text-accent-light/80 group-hover:text-accent-light transition-colors">
                  <FaQuoteLeft className="text-4xl" />
                </div>
                <p className="text-primary-light/90 mb-8 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white shadow-md"
                  />
                  <div>
                    <h4 className="font-semibold text-primary-dark">{testimonial.name}</h4>
                    <p className="text-sm text-primary-light/70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;