import React from 'react';

/**
 * Loader component (React + Tailwind)
 * Props:
 *  - size: 'sm' | 'md' | 'lg' (default 'md')
 *  - variant: 'spinner' | 'dots' | 'skeleton' (default 'spinner')
 *  - className: extra classes for wrapper
 *  - text: optional label shown beside loader
 *  - center: boolean to center horizontally & vertically (default true)
 *
 * Example usages at the bottom of this file.
 */

const SIZE_MAP = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-15 h-15',
};

export default function Loader({
  size = 'lg',
  variant = 'spinner',
  className = '',
  text = '',
  center = true,
}) {
  const sizeClass = SIZE_MAP[size] || SIZE_MAP.md;
  const wrapperBase = `${center ? 'flex items-center justify-center' : 'inline-flex items-center'} gap-3`; 

  return (
    <div className={`${wrapperBase} ${className}`} aria-live="polite" aria-busy="true">
      {variant === 'spinner' && (
        <span role="status" className={`inline-block ${sizeClass}`}>
          {/* Accessible SVG spinner using Tailwind's animate-spin */}
          <svg
            className="animate-spin w-full h-full text-gray-700"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeOpacity="0.15"
            />
            <path
              fill="currentColor"
              d="M43.94 25.04c0-10.49-8.46-18.95-18.95-18.95-10.49 0-18.95 8.46-18.95 18.95"
              stroke="currentColor"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </span>
      )}

      {variant === 'dots' && (
        <span className={`inline-flex items-center ${size === 'lg' ? 'text-xl' : ''}`}>
          {/* three bouncing dots - use inline styles for staggered delays */}
          <span
            className={`inline-block rounded-full ${size === 'sm' ? 'w-2 h-2' : size === 'lg' ? 'w-3 h-3' : 'w-2.5 h-2.5'} bg-gray-700 mr-1`}
            style={{ animation: 'loader-bounce 0.9s infinite both', animationDelay: '0s' }}
            aria-hidden="true"
          />
          <span
            className={`inline-block rounded-full ${size === 'sm' ? 'w-2 h-2' : size === 'lg' ? 'w-3 h-3' : 'w-2.5 h-2.5'} bg-gray-700 mr-1`}
            style={{ animation: 'loader-bounce 0.9s infinite both', animationDelay: '0.15s' }}
            aria-hidden="true"
          />
          <span
            className={`inline-block rounded-full ${size === 'sm' ? 'w-2 h-2' : size === 'lg' ? 'w-3 h-3' : 'w-2.5 h-2.5'} bg-gray-700`}
            style={{ animation: 'loader-bounce 0.9s infinite both', animationDelay: '0.3s' }}
            aria-hidden="true"
          />
          <span className="sr-only">Loading</span>
        </span>
      )}

      {variant === 'skeleton' && (
        <div
          className={`rounded ${size === 'sm' ? 'h-3 w-12' : size === 'lg' ? 'h-6 w-48' : 'h-4 w-24'} animate-pulse bg-gray-200`}
          aria-hidden="true"
        />
      )}

      {text && <span className="text-sm text-gray-700">{text}</span>}

      {/* Keyframes for the dot-bounce. Tailwind doesn't provide staggered delays easily, so we add a small style block. */}
      <style jsx>{`
        @keyframes loader-bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}

