export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  from: string;
  to: string[];
}

export const getEmailConfig = (): EmailConfig => {
  return {
    host: import.meta.env.VITE_EMAIL_SERVICE_HOST || 'smtp.gmail.com',
    port: parseInt(import.meta.env.VITE_EMAIL_SERVICE_PORT || '587'),
    secure: import.meta.env.VITE_EMAIL_SERVICE_SECURE === 'true',
    auth: {
      user: import.meta.env.VITE_EMAIL_SERVICE_USER || '',
      pass: import.meta.env.VITE_EMAIL_SERVICE_PASS || ''
    },
    from: import.meta.env.VITE_EMAIL_FROM || '',
    to: import.meta.env.VITE_EMAIL_TO ? [import.meta.env.VITE_EMAIL_TO] : []
  };
};

export const isEmailConfigured = (): boolean => {
  const config = getEmailConfig();
  return !!(config.auth.user && config.auth.pass && config.from && config.to.length > 0);
};