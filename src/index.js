import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './components/App';

const root = createRoot(document.getElementById('root'));

root.render(
    <Auth0Provider
        domain="karanr1990.us.auth0.com"
        clientId="Hke5LTb3eTHNwwzpgjmOLbMciaui4sfa"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <App />
    </Auth0Provider>,
);