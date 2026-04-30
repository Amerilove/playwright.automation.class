import { test, expect } from '@playwright/test';

test.describe.serial('Character flow validation', () => {
  let token = '';
  let charID = 0;

  test.beforeAll(async ({ request }) => {
    const tokenResponse = await request.post('/api/auth/token', {
      data: {
        username: 'sofiat',
        password: 'N7p#L4x!C9r@W2mK',
      }
    });
    expect(tokenResponse.status()).toBe(200);
    const responseBody = await tokenResponse.json();
    token = responseBody.token;
  });

  // SPLIT 1: Validate the first character
  test('Validate Sofia the Wise (Index 0)', async ({ request }) => {
    const response = await request.get('/api/characters', {
      headers: { Authorization: 'Bearer ' + token },
    });
    const body = await response.json();
    expect(body[0].name).toBe('Sofia the wise');
    expect(body[0].status).toBe('draft');
  });

  // SPLIT 2: Validate the second character
  test('Validate Mad Sofia (Index 1)', async ({ request }) => {
    const response = await request.get('/api/characters', {
      headers: { Authorization: 'Bearer ' + token },
    });
    const body = await response.json();
    expect(body[1].name).toBe('Mad Sofia');
    expect(body[1].status).toBe('complete');
  });

  // SPLIT 3: Validate the third character AND save the ID
  test('Validate Kind Sofia (Index 2) and Store ID', async ({ request }) => {
    const response = await request.get('/api/characters', {
      headers: { Authorization: 'Bearer ' + token },
    });
    const body = await response.json();
    expect(body[2].name).toBe('Kind Sofia');
    
    // We save this ID specifically to use in the NEXT test
    charID = body[2].id; 
  });

  // REUSE: Use the ID from the previous test
  test('Fetch saved Character by specific ID', async ({ request }) => {
    const response = await request.get('/api/characters/' + charID);
    expect(response.status()).toBe(200);
  });
});