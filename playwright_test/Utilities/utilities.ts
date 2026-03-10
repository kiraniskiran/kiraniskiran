
//This file contains utility functions that can be used across the test suite. These functions can be used to perform common actions like filling data in input fields, clicking on elements, etc. 
// This helps in reducing code duplication and makes the test cases more readable and maintainable.
import { expect } from "playwright/test";

export async function fillData(locator: any, data: any) {
  await locator.isVisible();
  await locator.fill(data)

}

export async function click(locator: any) {

  await expect(locator).toBeVisible();
  await locator.click();

}

