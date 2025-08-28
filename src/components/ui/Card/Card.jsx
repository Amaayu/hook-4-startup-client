import React from 'react';
import { classNames, commonClasses } from '../../../utils/classNames';

/**
 * Card Component
 * A flexible container component with consistent styling
 */
const Card = ({
  children,
  hover = false,
  interactive = false,
  padding = 'md',
  className = '',
  onClick,
  ...props
}) => {
  const paddingMap = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const baseClasses = commonClasses.card.base;
  const variantClasses = interactive 
    ? commonClasses.card.interactive 
    : hover 
    ? commonClasses.card.hover 
    : commonClasses.card.default;

  const cardClasses = classNames(
    baseClasses,
    variantClasses,
    paddingMap[padding] || paddingMap.md,
    className
  );

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

// Card sub-components for better composition
const CardHeader = ({ children, className = '', ...props }) => (
  <div className={classNames('mb-4', className)} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={classNames('flex-1', className)} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={classNames('mt-4 pt-4 border-t border-secondary-200', className)} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={classNames('text-lg font-semibold text-secondary-900', className)} {...props}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = '', ...props }) => (
  <p className={classNames('text-sm text-secondary-600 mt-1', className)} {...props}>
    {children}
  </p>
);

// Attach sub-components to main Card component
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Description = CardDescription;

export default Card;