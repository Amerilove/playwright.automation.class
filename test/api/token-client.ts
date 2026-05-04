//→ gets token
import { APIRequestContext } from '@playwright/test';
//Importing the APIRequestContext type to ensure my authentication function follows the strict structure required by the Playwright library for making API calls.
export async function getToken(request: APIRequestContext) {
    //creating a reusable, public tool that will go out to the internet, talk to a server, and bring back a token, and I'm going to use the official Playwright rules to do it
    const response = await request.post('/api/auth/token', {
        data: {
            username: 'sofiat',
            password: 'N7p#L4x!C9r@W2mK',
      },
    });
//Verification: The server checks if 'sofiat' is a valid user.
    const responseToken = await response.json();
//Response: The server sends back a JSON package containing your Token.
    return responseToken.token;
    //Delivery: Your function extracts that specific token and hands it to your tests.
}
