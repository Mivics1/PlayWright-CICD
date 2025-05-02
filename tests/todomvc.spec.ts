import { test, expect } from '@playwright/test';

test.describe('Regression Test Suite - TodoMVC', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
  });

  test('Homepage loads with correct title and input field', async ({ page }) => {
    await expect(page).toHaveTitle(/TodoMVC/);
    await expect(page.locator('h1')).toHaveText('todoss');
    await expect(page.locator('.new-todo')).toBeVisible();
  });

  test('User can add a new todo item', async ({ page }) => {
    const input = page.locator('.new-todo');
    await input.fill('Learn Playwright');
    await input.press('Enter');

    const items = page.locator('.todo-list li');
    await expect(items).toHaveCount(1);
    await expect(items.first()).toContainText('Learn Playwright');
  });

  test('User can mark a todo as completed', async ({ page }) => {
    await page.locator('.new-todo').fill('Write tests');
    await page.locator('.new-todo').press('Enter');

    const toggle = page.locator('.todo-list li .toggle');
    await toggle.check();

    const completedItem = page.locator('.todo-list li.completed');
    await expect(completedItem).toHaveCount(1);
  });

  test('User can delete a todo item', async ({ page }) => {
    await page.locator('.new-todo').fill('Delete me');
    await page.locator('.new-todo').press('Enter');

    const todo = page.locator('.todo-list li');
    await expect(todo).toHaveCount(1);

    await page.hover('.todo-list li');
    await page.click('.todo-list li .destroy');

    await expect(page.locator('.todo-list li')).toHaveCount(0);
  });

});
