import { test, expect } from '@playwright/test';

// This test suite contains API tests for the Petstore API, specifically testing the POST and GET endpoints for managing pet details.
//  It includes tests for both valid and invalid scenarios to ensure the API behaves as expected.

test.describe('Petstore API Tests - GET /v2/18934561245', () => {
  const baseURL = 'https://petstore.swagger.io/v2/';

  test('To verify the post request is working', async ({ request }) => {
    const response = await request.post(`${baseURL}pet`, {
      data: {
        "id": 6199,
        "category": {
          "id": 2107,
          "name": "playwright dog"
        },
        "name": "playwright Tommy",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 1708,
            "name": "black"
          }
        ],
        "status": "available"

      }

    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const petInfo = await response.json();
    const petId = petInfo.id;

    //The following code sends a GET request to retrieve the details of the pet that was just created using the POST request. It then validates that the details of the pet are correct and that the response status is 200 OK.
    const getPet = await request.get(`${baseURL}pet/` + petId);

    // The console.log statement is used to print the details of the pet retrieved from the GET request to the console for debugging purposes. 
    // This can help in verifying that the correct pet details are being retrieved and can assist in troubleshooting if the test fails.
    console.log("Pet details: ", await getPet.json());

    // The following assertions validate that the pet details retrieved from the GET request match the expected values, and that the response status is 200 OK.
    await expect(getPet.json()).resolves.toMatchObject({ name: "playwright Tommy" });
    expect(getPet.ok()).toBeTruthy();
    expect(getPet.status()).toBe(200);

  });
// This test validates the scenario when an invalid pet ID is provided in the GET request, 
// expecting a 404 Not Found response.
  test('Validate the scenario with invalid data', async ({ request }) => {

    const response = await request.get(`${baseURL}pet/` + 555);
    console.log("Response: ", await response.json());
//validating that the response status is 404 Not Found when an invalid pet ID is provided in the GET request.
    expect(response.status()).toBe(404);


  });
});