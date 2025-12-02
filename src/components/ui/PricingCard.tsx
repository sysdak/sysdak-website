import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import PremiumButton from './PremiumButton';

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  subtitle,
  price,
  period = 'month',
  features,
  highlighted = false,
  buttonText = 'Get Started',
  onButtonClick,
  className = ''
}) => {
  const baseClasses = 'relative rounded-2xl overflow-hidden';

  const variantClasses = highlighted
    ? 'bg-gradient-to-br from-primary-600 to-secondary-600 text-white shadow-premium-glow transform scale-105'
    : 'bg-white border border-neutral-200 shadow-premium';

  const classes = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {highlighted && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-neutral-900 px-3 py-1 rounded-bl-xl text-xs font-bold flex items-center">
          <Star size={12} className="mr-1" fill="currentColor" />
          POPULAR
        </div>
      )}

      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-neutral-900'}`}>
            {title}
          </h3>
          <p className={`text-sm ${highlighted ? 'text-blue-100' : 'text-neutral-600'}`}>
            {subtitle}
          </p>
        </div>

        <div className="text-center mb-8">
          <div className={`text-5xl font-bold ${highlighted ? 'text-white' : 'text-neutral-900'}`}>
            {price}
          </div>
          {period && (
            <div className={`text-sm ${highlighted ? 'text-blue-100' : 'text-neutral-600'}`}>
              per {period}
            </div>
          )}
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check
                size={20}
                className={highlighted ? 'text-blue-200 mr-3 flex-shrink-0 mt-0.5' : 'text-primary-600 mr-3 flex-shrink-0 mt-0.5'}
                fill="currentColor"
              />
              <span className={highlighted ? 'text-blue-100' : 'text-neutral-700'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <PremiumButton
          variant={highlighted ? 'outline' : 'primary'}
          fullWidth
          onClick={onButtonClick}
          className={highlighted ? 'border-white/20 text-white hover:bg-white hover:text-primary-900' : ''}
        >
          {buttonText}
        </PremiumButton>
      </div>
    </motion.div>
  );
};

export default PricingCard;