import { test } from '@playwright/test';
import { PlaywrightDevPage } from '../POM/login';
import data from '../POM/data.json';


test.beforeEach(async ({ page }) => {
  await page.goto('/');
});


//This test validates incorrect login by giving incorrect username and password 

test('validate the form with incorrect username and password', async ({ page }) => {

  var loginpage = new PlaywrightDevPage(page);
  await loginpage.invalidLogin(data.invalidLoginDetails.username, data.invalidLoginDetails.password);

});

//This test logins into the application and validates the title of the page after login. The username and password are read from the data.json file in POM folder
test('Enter the correct username and password and login to application and validate the title', async ({ page }) => {

  var loginpage = new PlaywrightDevPage(page);
  await loginpage.login(data.loginDetails.username, data.loginDetails.password);

});