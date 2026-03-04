/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,html}",
    "./tests/**/*.{js,ts,jsx,tsx,vue,html}"
  ],
  theme: {
    extend: {
      // Custom colors for link preview cards
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Primary brand color
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        },
        card: {
          bg: '#ffffff',
          border: '#e5e7eb',
          shadow: 'rgba(0, 0, 0, 0.1)',
          text: '#111827',
          muted: '#6b7280'
        },
        social: {
          twitter: '#1da1f2',
          facebook: '#1877f2',
          linkedin: '#0077b5',
          discord: '#5865f2',
          github: '#24292f'
        }
      },

      // Typography for preview cards
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif']
      },

      // Social media card dimensions
      width: {
        'card': '600px',        // Standard preview card width
        'card-lg': '800px',     // Large preview card width
        'social': '1200px',     // Social media OG image width
        'mobile-card': '320px'  // Mobile optimized card width
      },
      height: {
        'card': '315px',        // Standard preview card height (1200x630 / 2)
        'card-lg': '420px',     // Large preview card height
        'social': '630px',      // Social media OG image height
        'mobile-card': '180px'  // Mobile optimized card height
      },

      // Custom spacing for card layouts
      spacing: {
        'card-padding': '1.5rem',
        'card-gap': '1rem',
        'section-gap': '2rem'
      },

      // Box shadows for card components
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'preview': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'export': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner-card': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
      },

      // Border radius for modern design
      borderRadius: {
        'card': '12px',
        'preview': '16px',
        'control': '8px'
      },

      // Animation and transitions
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'preview-update': 'previewUpdate 0.15s ease-in-out',
        'export-bounce': 'exportBounce 0.6s ease-in-out'
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        previewUpdate: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.9' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        exportBounce: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'scale(1)' },
          '40%, 43%': { transform: 'scale(1.1)' },
          '70%': { transform: 'scale(1.05)' }
        }
      },

      // Custom screens for responsive design
      screens: {
        'xs': '475px',
        'card-breakpoint': '768px'
      },

      // Z-index layers
      zIndex: {
        'modal': '1000',
        'dropdown': '100',
        'header': '50',
        'card': '10'
      }
    },
  },
  plugins: [
    // Add custom utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance'
        },
        '.aspect-social': {
          'aspect-ratio': '1200 / 630'
        },
        '.aspect-card': {
          'aspect-ratio': '16 / 9'
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
      addUtilities(newUtilities)
    }
  ],
}

