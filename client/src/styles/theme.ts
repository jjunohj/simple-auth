export const theme = {
  colors: {
    primary: '#0064FF',
    secondary: '#6B7280',
    success: '#10B981',
    danger: '#EF4444',
    warning: '#F59E0B',
    background: '#FFFFFF',
    text: '#1F2937',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
} as const;
