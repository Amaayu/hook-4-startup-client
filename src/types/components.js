/**
 * Component prop types and interfaces for Hook4Startup UI components
 * Using JSDoc for type definitions since we're using JavaScript
 */

/**
 * @typedef {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'} Size
 * Standard size variants used across components
 */

/**
 * @typedef {'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'warning'} Variant
 * Standard color variants used across components
 */

/**
 * @typedef {'left' | 'right'} IconPosition
 * Position of icon relative to text content
 */

/**
 * @typedef {Object} ButtonProps
 * @property {React.ReactNode} [children] - Button content
 * @property {Variant} [variant='primary'] - Button style variant
 * @property {Size} [size='md'] - Button size
 * @property {React.ReactElement} [icon] - Icon element to display
 * @property {IconPosition} [iconPosition='left'] - Position of the icon
 * @property {boolean} [loading=false] - Show loading spinner
 * @property {boolean} [disabled=false] - Disable button interaction
 * @property {boolean} [fullWidth=false] - Make button full width
 * @property {string} [className=''] - Additional CSS classes
 * @property {Function} [onClick] - Click handler function
 * @property {'button' | 'submit' | 'reset'} [type='button'] - Button type
 */

/**
 * @typedef {Object} InputProps
 * @property {string} [value] - Input value
 * @property {string} [placeholder] - Placeholder text
 * @property {'text' | 'email' | 'password' | 'number' | 'tel' | 'url'} [type='text'] - Input type
 * @property {Size} [size='md'] - Input size
 * @property {Variant} [variant='default'] - Input style variant
 * @property {boolean} [disabled=false] - Disable input
 * @property {boolean} [required=false] - Mark input as required
 * @property {boolean} [error=false] - Show error state
 * @property {string} [errorMessage] - Error message to display
 * @property {React.ReactElement} [icon] - Icon element to display
 * @property {IconPosition} [iconPosition='left'] - Position of the icon
 * @property {string} [className=''] - Additional CSS classes
 * @property {Function} [onChange] - Change handler function
 * @property {Function} [onFocus] - Focus handler function
 * @property {Function} [onBlur] - Blur handler function
 */

/**
 * @typedef {Object} CardProps
 * @property {React.ReactNode} children - Card content
 * @property {boolean} [hover=false] - Enable hover effects
 * @property {boolean} [interactive=false] - Make card interactive/clickable
 * @property {'sm' | 'md' | 'lg'} [padding='md'] - Card padding size
 * @property {string} [className=''] - Additional CSS classes
 * @property {Function} [onClick] - Click handler for interactive cards
 */

/**
 * @typedef {Object} AvatarProps
 * @property {string} [src] - Image source URL
 * @property {string} [alt] - Alt text for image
 * @property {string} [name] - Name for fallback initials
 * @property {Size} [size='md'] - Avatar size
 * @property {boolean} [online=false] - Show online status indicator
 * @property {string} [className=''] - Additional CSS classes
 * @property {Function} [onClick] - Click handler function
 */

/**
 * @typedef {Object} BadgeProps
 * @property {React.ReactNode} children - Badge content
 * @property {Variant} [variant='primary'] - Badge color variant
 * @property {Size} [size='md'] - Badge size
 * @property {boolean} [dot=false] - Show as dot indicator
 * @property {string} [className=''] - Additional CSS classes
 */

/**
 * @typedef {Object} LoadingProps
 * @property {Size} [size='md'] - Loading spinner size
 * @property {string} [text] - Loading text to display
 * @property {boolean} [overlay=false] - Show as overlay
 * @property {string} [className=''] - Additional CSS classes
 */

/**
 * @typedef {Object} ModalProps
 * @property {boolean} isOpen - Whether modal is open
 * @property {Function} onClose - Function to close modal
 * @property {React.ReactNode} children - Modal content
 * @property {string} [title] - Modal title
 * @property {Size} [size='md'] - Modal size
 * @property {boolean} [closeOnOverlay=true] - Close when clicking overlay
 * @property {boolean} [closeOnEscape=true] - Close when pressing escape
 * @property {string} [className=''] - Additional CSS classes
 */

/**
 * @typedef {Object} ToastProps
 * @property {string} message - Toast message
 * @property {'success' | 'error' | 'warning' | 'info'} [type='info'] - Toast type
 * @property {number} [duration=5000] - Auto-dismiss duration in ms
 * @property {boolean} [dismissible=true] - Show dismiss button
 * @property {Function} [onDismiss] - Dismiss handler function
 */

/**
 * @typedef {Object} NavigationItem
 * @property {string} label - Navigation item label
 * @property {string} href - Navigation item URL
 * @property {React.ReactElement} [icon] - Navigation item icon
 * @property {boolean} [active=false] - Whether item is currently active
 * @property {NavigationItem[]} [children] - Sub-navigation items
 */

/**
 * @typedef {Object} User
 * @property {string} id - User ID
 * @property {string} username - Username
 * @property {string} email - Email address
 * @property {string} [fullName] - Full name
 * @property {string} [bio] - User bio
 * @property {string} [profilePictureUrl] - Profile picture URL
 * @property {boolean} [makeProfileStatus] - Whether profile is complete
 * @property {string} [roles] - User roles
 * @property {Date} [creationDate] - Account creation date
 * @property {Date} [lastModifiedDate] - Last profile update date
 */

/**
 * @typedef {Object} Post
 * @property {string} id - Post ID
 * @property {User} userId - Post author
 * @property {string} username - Author username
 * @property {string} [profileImageUrl] - Author profile image
 * @property {string} content - Post content
 * @property {string} [imageUrl] - Post image URL
 * @property {string} [postImageUrl] - Alternative post image URL
 * @property {User[]} likes - Users who liked the post
 * @property {Comment[]} comments - Post comments
 * @property {Date} creationDate - Post creation date
 * @property {Date} [lastModifiedDate] - Last modification date
 */

/**
 * @typedef {Object} Comment
 * @property {string} commentId - Comment ID
 * @property {Post} postId - Associated post
 * @property {User} userId - Comment author
 * @property {string} content - Comment content
 * @property {Date} creationDate - Comment creation date
 */

/**
 * @typedef {Object} MeetupNotification
 * @property {string} hook_userId - User ID
 * @property {string} username - Username
 * @property {string} name - User full name
 * @property {string} dpUrl - Profile picture URL
 * @property {string} message - Notification message
 * @property {string} [meetupId] - Associated meetup ID
 * @property {Date} [timestamp] - Notification timestamp
 */

// Export types for use in other files
export const ComponentTypes = {
  // This is a placeholder for actual TypeScript types
  // In a TypeScript project, these would be proper type definitions
};