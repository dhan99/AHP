'use client';

import React, { ReactNode } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

interface Auth0ProviderProps {
  children: ReactNode;
}

export const Auth0ProviderWithConfig: React.FC<Auth0ProviderProps> = ({ children }) => {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN || '';
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || '';
  const redirectUri = typeof window !== 'undefined' ? window.location.origin : '';

  if (!domain || !clientId) {
    return <>{children}</>; // Render children without Auth0 in case config is missing
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      {children}
    </Auth0Provider>
  );
}; 