import React from 'react';
import { classNames, commonClasses, getSizeClasses, getVariantClasses } from '../../../utils/classNames';

/**
 * Button Component
 * A versatile button component with multiple variants and sizes
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseClasses = commonClasses.button.base;
  const variantClasses = getVariantClasses(variant, commonClasses.button);
  const sizeClasses = getSizeClasses(size, commonClasses.buttonSize);
  
  const buttonClasses = classNames(
    baseClasses,
    variantClasses,
    sizeClasses,
    fullWidth && 'w-full',
    (loading || disabled) && 'cursor-not-allowed',
    className
  );

  const iconSize = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  }[size];

  const LoadingSpinner = () => (
    <svg
      className={classNames('animate-spin', iconSize)}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const renderIcon = () => {
    if (loading) return <LoadingSpinner />;
    if (!icon) return null;
    
    return React.cloneElement(icon, {
      className: classNames(iconSize, icon.props?.className)
    });
  };

  const renderContent = () => {
    if (loading && !children) return null;
    
    return (
      <>
        {icon && iconPosition === 'left' && (
          <span className={children ? 'mr-2' : ''}>{renderIcon()}</span>
        )}
        {children && <span>{children}</span>}
        {icon && iconPosition === 'right' && (
          <span className={children ? 'ml-2' : ''}>{renderIcon()}</span>
        )}
      </>
    );
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

// Button variants for easy access
Button.Primary = (props) => <Button variant="primary" {...props} />;
Button.Secondary = (props) => <Button variant="secondary" {...props} />;
Button.Ghost = (props) => <Button variant="ghost" {...props} />;
Button.Danger = (props) => <Button variant="danger" {...props} />;

export default Button;