import { expect, type Locator, type Page } from '@playwright/test';
import { click, fillData } from '../Utilities/utilities';

export class PlaywrightDevPage {
  readonly page: Page;

  readonly signIn: Locator;
  readonly getUsername: Locator;
  readonly getPassword: Locator;
  readonly errorMessage: Locator;




  constructor(page: Page) {
    this.page = page;
    this.getUsername = page.locator("#user-name");
    this.getPassword = page.locator("#password");
    this.signIn = page.locator("#login-button");
    this.errorMessage = page.locator("[data-test='error']")

  }
  async login(username: string, password: string) {
    await fillData(this.getUsername, username)
    await fillData(this.getPassword, password)
    await click(this.signIn)
    await expect(this.page).toHaveTitle(/Swag Labs/);

  }
  async invalidLogin(username: string, password: string) {
    await fillData(this.getUsername, username)
    await fillData(this.getPassword, password)
    await click(this.signIn)
    await expect(this.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
  }

}
