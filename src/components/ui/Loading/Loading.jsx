import React from 'react';
import { classNames, commonClasses } from '../../../utils/classNames';

/**
 * Loading Component
 * Displays loading states with spinners and skeleton screens
 */
const Loading = ({
  size = 'md',
  text,
  overlay = false,
  variant = 'spinner',
  className = '',
  ...props
}) => {
  const sizeMap = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizeMap = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const Spinner = () => (
    <div
      className={classNames(
        commonClasses.loading.spinner,
        sizeMap[size] || sizeMap.md,
        className
      )}
      {...props}
    />
  );

  const Dots = () => (
    <div className={classNames('flex space-x-1', className)} {...props}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={classNames(
            'bg-primary-500 rounded-full animate-pulse',
            {
              xs: 'w-1 h-1',
              sm: 'w-1.5 h-1.5',
              md: 'w-2 h-2',
              lg: 'w-3 h-3',
              xl: 'w-4 h-4',
            }[size] || 'w-2 h-2'
          )}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1s',
          }}
        />
      ))}
    </div>
  );

  const Pulse = () => (
    <div
      className={classNames(
        'bg-secondary-200 rounded animate-pulse',
        sizeMap[size] || sizeMap.md,
        className
      )}
      {...props}
    />
  );

  const renderLoadingIndicator = () => {
    switch (variant) {
      case 'dots':
        return <Dots />;
      case 'pulse':
        return <Pulse />;
      case 'spinner':
      default:
        return <Spinner />;
    }
  };

  const content = (
    <div className="flex flex-col items-center justify-center space-y-3">
      {renderLoadingIndicator()}
      {text && (
        <p className={classNames(
          'text-secondary-600 font-medium',
          textSizeMap[size] || textSizeMap.md
        )}>
          {text}
        </p>
      )}
    </div>
  );

  if (overlay) {
    return (
      <div className={classNames(
        commonClasses.loading.overlay,
        className
      )}>
        {content}
      </div>
    );
  }

  return content;
};

// Skeleton component for content loading
const Skeleton = ({
  width = 'w-full',
  height = 'h-4',
  className = '',
  ...props
}) => (
  <div
    className={classNames(
      commonClasses.loading.skeleton,
      width,
      height,
      className
    )}
    {...props}
  />
);

// Skeleton variants for common use cases
const SkeletonText = ({ lines = 3, className = '', ...props }) => (
  <div className={classNames('space-y-2', className)} {...props}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        width={i === lines - 1 ? 'w-3/4' : 'w-full'}
        className="h-4"
      />
    ))}
  </div>
);

const SkeletonCard = ({ className = '', ...props }) => (
  <div className={classNames('p-6 bg-white rounded-xl border border-secondary-200', className)} {...props}>
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton width="w-12" height="h-12" className="rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton width="w-1/3" height="h-4" />
        <Skeleton width="w-1/4" height="h-3" />
      </div>
    </div>
    <SkeletonText lines={3} />
  </div>
);

const SkeletonAvatar = ({ size = 'md', className = '', ...props }) => {
  const sizeMap = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20',
    '3xl': 'w-24 h-24',
  };

  return (
    <Skeleton
      width={sizeMap[size] || sizeMap.md}
      height={sizeMap[size] || sizeMap.md}
      className={classNames('rounded-full', className)}
      {...props}
    />
  );
};

// Attach skeleton components
Loading.Skeleton = Skeleton;
Loading.SkeletonText = SkeletonText;
Loading.SkeletonCard = SkeletonCard;
Loading.SkeletonAvatar = SkeletonAvatar;

export default Loading;