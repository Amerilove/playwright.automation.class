//→ gets token
import { APIRequestContext } from '@playwright/test';

export async function getToken(request: APIRequestContext) {
    const response = await request.post('/api/auth/token', {
        data: {
            username: 'sofiat',
            password: 'N7p#L4x!C9r@W2mK',
      },
    });

    const responseToken = await response.json();

    return responseToken.token;
    
}