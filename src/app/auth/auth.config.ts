import { PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
    authority: 'https://dev-ihlldbpqyyl8j7wp.us.auth0.com',
    redirectUrl: window.location.origin,
    clientId: 'hgjQEv6PQnEcYZAGy7NJrGwqbJCLwcYm',
    scope: 'openid profile offline_access',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
  }
}
