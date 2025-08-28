import React, { useState } from 'react';
import { classNames, commonClasses, getSizeClasses } from '../../../utils/classNames';

/**
 * Avatar Component
 * Displays user profile pictures with fallback to initials
 */
const Avatar = ({
  src,
  alt,
  name = '',
  size = 'md',
  online = false,
  className = '',
  onClick,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const sizeClasses = getSizeClasses(size, commonClasses.avatar);
  
  const avatarClasses = classNames(
    'relative inline-flex items-center justify-center rounded-full bg-secondary-100 overflow-hidden',
    'ring-2 ring-white shadow-soft',
    sizeClasses,
    onClick && 'cursor-pointer hover:ring-primary-200 transition-all duration-200',
    className
  );

  const getInitials = (name) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const textSizeMap = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  };

  const statusSizeMap = {
    xs: 'w-2 h-2',
    sm: 'w-2.5 h-2.5',
    md: 'w-3 h-3',
    lg: 'w-3.5 h-3.5',
    xl: 'w-4 h-4',
    '2xl': 'w-5 h-5',
    '3xl': 'w-6 h-6',
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const renderContent = () => {
    if (src && !imageError) {
      return (
        <>
          {imageLoading && (
            <div className="absolute inset-0 bg-secondary-200 animate-pulse rounded-full" />
          )}
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            className={classNames(
              'w-full h-full object-cover rounded-full',
              imageLoading && 'opacity-0'
            )}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </>
      );
    }

    return (
      <span
        className={classNames(
          'font-medium text-secondary-600 select-none',
          textSizeMap[size] || textSizeMap.md
        )}
      >
        {getInitials(name)}
      </span>
    );
  };

  return (
    <div className={avatarClasses} onClick={onClick} {...props}>
      {renderContent()}
      
      {/* Online status indicator */}
      {online && (
        <div
          className={classNames(
            'absolute bottom-0 right-0 rounded-full border-2 border-white',
            'bg-success-500',
            statusSizeMap[size] || statusSizeMap.md
          )}
        />
      )}
    </div>
  );
};

// Avatar group component for displaying multiple avatars
const AvatarGroup = ({ 
  children, 
  max = 5, 
  size = 'md',
  className = '',
  ...props 
}) => {
  const avatars = React.Children.toArray(children);
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  const spacingMap = {
    xs: '-space-x-1',
    sm: '-space-x-1.5',
    md: '-space-x-2',
    lg: '-space-x-2.5',
    xl: '-space-x-3',
    '2xl': '-space-x-4',
    '3xl': '-space-x-5',
  };

  return (
    <div 
      className={classNames(
        'flex items-center',
        spacingMap[size] || spacingMap.md,
        className
      )}
      {...props}
    >
      {visibleAvatars.map((avatar, index) =>
        React.cloneElement(avatar, {
          key: index,
          size,
          className: classNames(
            avatar.props.className,
            'ring-2 ring-white hover:z-10 relative'
          )
        })
      )}
      
      {remainingCount > 0 && (
        <Avatar
          size={size}
          name={`+${remainingCount}`}
          className="bg-secondary-200 text-secondary-600 ring-2 ring-white relative hover:z-10"
        />
      )}
    </div>
  );
};

Avatar.Group = AvatarGroup;

export default Avatar;