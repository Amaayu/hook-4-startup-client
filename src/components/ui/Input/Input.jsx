import React, { useState, forwardRef } from 'react';
import { classNames, commonClasses, getSizeClasses, getVariantClasses } from '../../../utils/classNames';

/**
 * Input Component
 * A versatile input component with validation states and accessibility features
 */
const Input = forwardRef(({
  type = 'text',
  value,
  placeholder,
  size = 'md',
  variant = 'default',
  disabled = false,
  required = false,
  error = false,
  errorMessage,
  helperText,
  label,
  icon,
  iconPosition = 'left',
  showPasswordToggle = false,
  className = '',
  onChange,
  onFocus,
  onBlur,
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const inputType = type === 'password' && showPassword ? 'text' : type;
  const hasError = error || errorMessage;
  const currentVariant = hasError ? 'error' : variant;

  const baseClasses = commonClasses.input.base;
  const variantClasses = getVariantClasses(currentVariant, commonClasses.input);
  const sizeClasses = getSizeClasses(size, commonClasses.inputSize);

  const inputClasses = classNames(
    baseClasses,
    variantClasses,
    sizeClasses,
    icon && iconPosition === 'left' && 'pl-10',
    icon && iconPosition === 'right' && 'pr-10',
    (type === 'password' && showPasswordToggle) && 'pr-10',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  const iconSize = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }[size];

  const handleFocus = (e) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setFocused(false);
    onBlur?.(e);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const EyeIcon = ({ open }) => (
    <svg
      className={iconSize}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {open ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
        />
      )}
    </svg>
  );

  const renderIcon = () => {
    if (!icon) return null;
    
    return React.cloneElement(icon, {
      className: classNames(iconSize, 'text-secondary-400', icon.props?.className)
    });
  };

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-secondary-700 mb-2">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {icon && iconPosition === 'left' && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {renderIcon()}
          </div>
        )}

        {/* Input Field */}
        <input
          ref={ref}
          type={inputType}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={inputClasses}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />

        {/* Right Icon or Password Toggle */}
        {(icon && iconPosition === 'right') || (type === 'password' && showPasswordToggle) ? (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {type === 'password' && showPasswordToggle ? (
              <button
                type="button"
                className="text-secondary-400 hover:text-secondary-600 focus:outline-none focus:text-secondary-600 transition-colors"
                onClick={togglePasswordVisibility}
              >
                <EyeIcon open={showPassword} />
              </button>
            ) : (
              renderIcon()
            )}
          </div>
        ) : null}

        {/* Focus Ring */}
        {focused && (
          <div className="absolute inset-0 rounded-lg ring-2 ring-primary-500 ring-opacity-50 pointer-events-none" />
        )}
      </div>

      {/* Helper Text or Error Message */}
      {(helperText || errorMessage) && (
        <p className={classNames(
          'mt-2 text-sm',
          hasError ? 'text-error-600' : 'text-secondary-500'
        )}>
          {errorMessage || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;