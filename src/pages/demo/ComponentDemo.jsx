import React, { useState } from 'react';
import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';
import Avatar from '../../components/ui/Avatar/Avatar';
import Card from '../../components/ui/Card/Card';
import Loading from '../../components/ui/Loading/Loading';

/**
 * Component Demo Page
 * Showcases the new UI components and design system
 */
const ComponentDemo = () => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  // Sample icons (you can replace with react-icons)
  const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );

  const HeartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-secondary-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            Hook4Startup Design System
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            A modern, responsive component library built for startup networking and collaboration.
          </p>
        </div>

        {/* Button Components */}
        <Card className="mb-8">
          <Card.Header>
            <Card.Title>Button Components</Card.Title>
            <Card.Description>
              Versatile button components with multiple variants and sizes
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-6">
              {/* Button Variants */}
              <div>
                <h4 className="text-sm font-medium text-secondary-700 mb-3">Variants</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </div>

              {/* Button Sizes */}
              <div>
                <h4 className="text-sm font-medium text-secondary-700 mb-3">Sizes</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>

              {/* Button with Icons */}
              <div>
                <h4 className="text-sm font-medium text-secondary-700 mb-3">With Icons</h4>
                <div className="flex flex-wrap gap-3">
                  <Button icon={<SearchIcon />}>Search</Button>
                  <Button icon={<HeartIcon />} iconPosition="right">Like</Button>
                  <Button 
                    loading={loading} 
                    onClick={handleButtonClick}
                  >
                    {loading ? 'Loading...' : 'Click me'}
                  </Button>
                </div>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Input Components */}
        <Card className="mb-8">
          <Card.Header>
            <Card.Title>Input Components</Card.Title>
            <Card.Description>
              Form inputs with validation states and accessibility features
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                helperText="We'll never share your email"
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                showPasswordToggle
                required
              />
              <Input
                label="Search"
                placeholder="Search for partners..."
                icon={<SearchIcon />}
              />
              <Input
                label="Error State"
                placeholder="This has an error"
                error
                errorMessage="This field is required"
              />
            </div>
          </Card.Content>
        </Card>

        {/* Avatar Components */}
        <Card className="mb-8">
          <Card.Header>
            <Card.Title>Avatar Components</Card.Title>
            <Card.Description>
              User profile pictures with fallback to initials and status indicators
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-6">
              {/* Avatar Sizes */}
              <div>
                <h4 className="text-sm font-medium text-secondary-700 mb-3">Sizes</h4>
                <div className="flex items-center space-x-4">
                  <Avatar size="xs" name="John Doe" />
                  <Avatar size="sm" name="Jane Smith" />
                  <Avatar size="md" name="Mike Johnson" />
                  <Avatar size="lg" name="Sarah Wilson" />
                  <Avatar size="xl" name="David Brown" />
                  <Avatar size="2xl" name="Lisa Davis" />
                </div>
              </div>

              {/* Avatar with Status */}
              <div>
                <h4 className="text-sm font-medium text-secondary-700 mb-3">With Status</h4>
                <div className="flex items-center space-x-4">
                  <Avatar name="Online User" online />
                  <Avatar name="Offline User" />
                  <Avatar 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                    name="Profile Picture" 
                    online 
                  />
                </div>
              </div>

              {/* Avatar Group */}
              <div>
                <h4 className="text-sm font-medium text-secondary-700 mb-3">Avatar Group</h4>
                <Avatar.Group max={4}>
                  <Avatar name="User 1" />
                  <Avatar name="User 2" />
                  <Avatar name="User 3" />
                  <Avatar name="User 4" />
                  <Avatar name="User 5" />
                  <Avatar name="User 6" />
                </Avatar.Group>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Loading Components */}
        <Card className="mb-8">
          <Card.Header>
            <Card.Title>Loading Components</Card.Title>
            <Card.Description>
              Loading states with spinners and skeleton screens
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-6">
              {/* Loading Variants */}
              <div>
                <h4 className="text-sm font-medium text-secondary-700 mb-3">Loading Variants</h4>
                <div className="flex items-center space-x-8">
                  <Loading variant="spinner" size="md" />
                  <Loading variant="dots" size="md" />
                  <Loading variant="pulse" size="md" />
                </div>
              </div>

              {/* Loading with Text */}
              <div>
                <h4 className="text-sm font-medium text-secondary-700 mb-3">With Text</h4>
                <Loading text="Loading your feed..." />
              </div>

              {/* Skeleton Loading */}
              <div>
                <h4 className="text-sm font-medium text-secondary-700 mb-3">Skeleton Loading</h4>
                <div className="space-y-4">
                  <Loading.SkeletonCard />
                  <div className="flex items-center space-x-4">
                    <Loading.SkeletonAvatar size="lg" />
                    <div className="flex-1">
                      <Loading.SkeletonText lines={2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Card Variants */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <Card.Header>
              <Card.Title>Default Card</Card.Title>
              <Card.Description>A basic card with default styling</Card.Description>
            </Card.Header>
            <Card.Content>
              <p className="text-secondary-600">
                This is a default card component with standard padding and styling.
              </p>
            </Card.Content>
          </Card>

          <Card hover>
            <Card.Header>
              <Card.Title>Hover Card</Card.Title>
              <Card.Description>Hover over this card to see the effect</Card.Description>
            </Card.Header>
            <Card.Content>
              <p className="text-secondary-600">
                This card has hover effects enabled for better interactivity.
              </p>
            </Card.Content>
          </Card>

          <Card interactive onClick={() => alert('Card clicked!')}>
            <Card.Header>
              <Card.Title>Interactive Card</Card.Title>
              <Card.Description>Click this card to interact with it</Card.Description>
            </Card.Header>
            <Card.Content>
              <p className="text-secondary-600">
                This card is interactive and responds to click events.
              </p>
            </Card.Content>
          </Card>
        </div>

        {/* Color Palette */}
        <Card>
          <Card.Header>
            <Card.Title>Color Palette</Card.Title>
            <Card.Description>
              The color system used throughout Hook4Startup
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Primary Colors */}
              <div>
                <h4 className="text-sm font-medium text-secondary-700 mb-3">Primary</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-500 rounded"></div>
                    <span className="text-sm">primary-500</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-600 rounded"></div>
                    <span className="text-sm">primary-600</span>
                  </div>
                </div>
              </div>

              {/* Secondary Colors */}
              <div>
                <h4 className="text-sm font-medium text-secondary-700 mb-3">Secondary</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary-500 rounded"></div>
                    <span className="text-sm">secondary-500</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary-600 rounded"></div>
                    <span className="text-sm">secondary-600</span>
                  </div>
                </div>
              </div>

              {/* Accent Colors */}
              <div>
                <h4 className="text-sm font-medium text-secondary-700 mb-3">Accent</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent-green rounded"></div>
                    <span className="text-sm">accent-green</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent-orange rounded"></div>
                    <span className="text-sm">accent-orange</span>
                  </div>
                </div>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-secondary-200">
          <p className="text-secondary-600">
            Hook4Startup Design System - Built with React and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComponentDemo;