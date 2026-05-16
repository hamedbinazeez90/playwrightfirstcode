import { test, request, expect } from '@playwright/test';
import { json } from 'node:stream/consumers';

test('@ API get product list from API', async () => {
  // Create API client
  const apiContext = await request.newContext();

  // Send GET request to product list endpoint
  const response = await apiContext.get('https://jsonplaceholder.typicode.com/posts/1');

  // Verify status code
  console.log(expect(response.status()).toBe(200));

  // Parse JSON response
  const jsonresponse = await response.json();
    console.log(jsonresponse)
});
