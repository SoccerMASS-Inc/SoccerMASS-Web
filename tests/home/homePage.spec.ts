import { test, expect } from "@playwright/test";

// test("Page is reachable", async ({ page }) => {
//   await page.goto("/");

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Wave Research/);

//   // const welcomeScreen = await page.getByTestId("welcome");

//   // // await welcomeScreen.hover();

//   // const apihub = await page.getByTestId("apihub");

//   // await apihub.scrollIntoViewIfNeeded();
//   // await apihub.click();

//   // await page.goto("");

//   // Click the get started link.
//   // await page.getByRole("link", { name: "Get started" }).click();

//   // // Expects page to have a heading with the name of Installation.
//   // await expect(page.getByRole("heading", { name: "Installation" })).toBeVisible();
// });

test("Header reacts to scroll events", async ({ page }) => {
  await page.goto("/");

  // Wait for page to initialize
  const initSelector = page.getByTestId("initializing");
  await expect(initSelector, "Page to have initialized and contents visible while loading spinner is hidden").not.toBeVisible({
    timeout: 10000, // default timeout for assertion is 5ms
  });

  // await page.waitForTimeout(1000); // Pause for effect
  await page.evaluate(() => {
    window.scrollBy(0, document.querySelector("body")!.scrollHeight); // Scroll to bottom of page
  });

  await page.waitForTimeout(1000); // Pause for effect

  // const stickyHeaderSelector = page.getByTestId("stickyHeader");
  // await expect(await page.getByTestId("stickyHeader"), "Sticky Header should be visible when users scroll to the bottom of the page").toBeVisible();
  await expect(
    await page.locator('[data-test-id="stickyHeader"]').getByText("Wave ResearchHomeAPI"),
    "Sticky Header should be visible when users scroll to the bottom of the page"
  ).toBeVisible();

  // await page.waitForTimeout(500); // Pause for effect
  // await page.keyboard.press("ArrowUp"); // Scroll down a page
  // await page.waitForTimeout(500); // Pause for effect

  // await expect(stickyHeaderSelector, "Sticky Header should be visible when a user is scrolling up").toBeVisible();

  // await page.waitForTimeout(500); // Pause for effect
  // await page.keyboard.press("PageDown"); // Scroll down a page
  // await page.waitForTimeout(500); // Pause for effect

  // await expect(stickyHeaderSelector, "Sticky Header should be visible when a user is scrolling up").not.toBeVisible();

  // //   if (await stickyHeader.isVisible()) {
  // //     await stickyHeader.click();
  await page.waitForTimeout(500); // Pause for effect

  // await page.evaluate(() => {
  //   page.mouse.wheel(deltaX, deltaY);
  // });

  // await page.waitForTimeout(500); // Pause for effect

  // await page.waitForTimeout(500); // Pause for effect
  // await page.getByTestId("apihub").click();
  // await page.waitForTimeout(500); // Pause for effect
  // await page.keyboard.press("ArrowUp"); // Scroll down a bit
  // // await page.keyboard.press("PageUp"); // Scroll down a page

  // await page.waitForTimeout(500); // Pause for effect

  // await page.getByTestId("apihub").scrollIntoViewIfNeeded();
  // await page.getByTestId("apihub").click();

  // await page.waitForTimeout(500); // Pause for effect

  // await page.waitForTimeout(500); // Pause for effect
  // await page.keyboard.press("PageUp"); // Scroll down a page
  // await page.waitForTimeout(500); // Pause for effect

  // await page.keyboard.press("ArrowUp"); // Scroll down a bit
});

// test("scroll to bottom", async ({ page }) => {
//   await page.goto("/");

//   // await page.getByTestId("footer").scrollIntoViewIfNeeded();
//   // await page.getByTestId("footer").click();

//   await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
//   await page.waitForTimeout(5000);
//   // expect(await page.locator("//a[contains(text(),'Next')]").isVisible()).toBeTruthy();
//   // expect(await page.getByTestId("stickyHeader").isVisible()).toBeTruthy();
//   expect(await page.getByTestId("footer").isVisible()).toBeTruthy();
// });
