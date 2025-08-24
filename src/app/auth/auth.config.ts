import { PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
    authority: 'https://dev-ihlldbpqyyl8j7wp.us.auth0.com',
    redirectUrl: "http://localhost:4200/callback",
    clientId: '04flLLXF0re7Z1lDqHuqDCEEUyj5qSCA',
    scope: 'openid profile offline_access email',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    secureRoutes: ['http://localhost:8080'], // Example of a secure route
    customParamsAuthRequest: {
      audience: 'http://localhost:8080', // Example of a custom parameter for the auth request
    }
  }
}
