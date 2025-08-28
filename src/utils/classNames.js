/**
 * Utility function to conditionally join class names
 * Similar to the popular 'clsx' library but lightweight
 */
export function classNames(...classes) {
  return classes
    .filter(Boolean)
    .join(' ');
}

/**
 * Utility function to merge Tailwind classes with proper precedence
 * Handles conflicts between classes (e.g., 'p-4' vs 'p-2')
 */
export function cn(...inputs) {
  return classNames(...inputs);
}

/**
 * Common class combinations for consistent styling
 */
export const commonClasses = {
  // Button variants
  button: {
    base: 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 shadow-soft hover:shadow-medium',
    secondary: 'bg-white text-secondary-700 border border-secondary-300 hover:bg-secondary-50 focus:ring-secondary-500',
    ghost: 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 focus:ring-secondary-500',
    danger: 'bg-error-500 text-white hover:bg-error-600 focus:ring-error-500',
  },
  
  // Button sizes
  buttonSize: {
    sm: 'px-3 py-1.5 text-sm h-8',
    md: 'px-4 py-2 text-sm h-10',
    lg: 'px-6 py-3 text-base h-12',
    xl: 'px-8 py-4 text-lg h-14',
  },
  
  // Input variants
  input: {
    base: 'w-full border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
    default: 'border-secondary-300 bg-white text-secondary-900 placeholder-secondary-400',
    error: 'border-error-500 bg-error-50 text-error-900 placeholder-error-400 focus:ring-error-500',
    success: 'border-success-500 bg-success-50 text-success-900 placeholder-success-400 focus:ring-success-500',
  },
  
  // Input sizes
  inputSize: {
    sm: 'px-3 py-1.5 text-sm h-8',
    md: 'px-3 py-2 text-sm h-10',
    lg: 'px-4 py-3 text-base h-12',
  },
  
  // Card variants
  card: {
    base: 'bg-white rounded-xl border overflow-hidden',
    default: 'border-secondary-200 shadow-soft',
    hover: 'border-secondary-200 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-200',
    interactive: 'border-secondary-200 shadow-soft hover:shadow-medium hover:border-primary-300 transition-all duration-200 cursor-pointer',
  },
  
  // Text variants
  text: {
    heading: 'font-heading font-semibold text-secondary-900',
    body: 'font-body text-secondary-700',
    muted: 'text-secondary-500',
    accent: 'text-primary-600',
    error: 'text-error-600',
    success: 'text-success-600',
    warning: 'text-warning-600',
  },
  
  // Layout utilities
  layout: {
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    section: 'py-12 lg:py-16',
    grid: 'grid gap-6',
    flex: 'flex items-center',
    center: 'flex items-center justify-center',
  },
  
  // Animation classes
  animation: {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    scaleIn: 'animate-scale-in',
    spin: 'animate-spin',
    pulse: 'animate-pulse',
    bounce: 'animate-bounce-soft',
  },
  
  // Loading states
  loading: {
    spinner: 'animate-spin rounded-full border-2 border-secondary-200 border-t-primary-500',
    skeleton: 'animate-pulse bg-secondary-200 rounded',
    overlay: 'absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center',
  },
  
  // Status indicators
  status: {
    online: 'bg-success-500',
    offline: 'bg-secondary-400',
    busy: 'bg-warning-500',
    away: 'bg-warning-400',
  },
  
  // Avatar sizes
  avatar: {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20',
    '3xl': 'w-24 h-24',
  },
  
  // Badge variants
  badge: {
    base: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    success: 'bg-success-100 text-success-800',
    warning: 'bg-warning-100 text-warning-800',
    error: 'bg-error-100 text-error-800',
  },
  
  // Focus styles for accessibility
  focus: {
    ring: 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    visible: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
  },
  
  // Responsive utilities
  responsive: {
    hide: {
      mobile: 'hidden sm:block',
      tablet: 'hidden md:block',
      desktop: 'hidden lg:block',
    },
    show: {
      mobile: 'block sm:hidden',
      tablet: 'block md:hidden',
      desktop: 'block lg:hidden',
    },
  },
};

/**
 * Utility to get responsive classes based on breakpoint
 */
export function getResponsiveClasses(classes) {
  if (typeof classes === 'string') return classes;
  
  const breakpoints = ['', 'sm:', 'md:', 'lg:', 'xl:', '2xl:'];
  return Object.entries(classes)
    .map(([breakpoint, className]) => {
      const prefix = breakpoints.includes(breakpoint + ':') ? breakpoint + ':' : '';
      return prefix + className;
    })
    .join(' ');
}

/**
 * Utility to generate size-based classes
 */
export function getSizeClasses(size, sizeMap) {
  return sizeMap[size] || sizeMap.md || '';
}

/**
 * Utility to generate variant-based classes
 */
export function getVariantClasses(variant, variantMap) {
  return variantMap[variant] || variantMap.default || '';
}