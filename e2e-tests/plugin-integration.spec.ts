import { test, expect } from '@playwright/test';

const GRAFANA_URL = process.env.GRAFANA_URL || 'http://localhost:3000';
const PLUGIN_ID = 'yesoreyeram-ui-datasource';

test.describe('UI Test Plugin E2E', () => {
  test('should verify plugin is installed and functional', async ({ page }) => {
    // Step 1: Visit the plugins page
    await page.goto(`${GRAFANA_URL}/plugins`);
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Step 2: Search for and verify our UI plugin is installed
    await page.getByPlaceholder('Search Grafana plugins').fill('ui');
    
    // Wait a bit for search results
    await page.waitForTimeout(1000);
    
    // Verify the plugin appears in the list
    const pluginCard = page.locator(`a[href*="/plugins/${PLUGIN_ID}"]`).first();
    await expect(pluginCard).toBeVisible({ timeout: 10000 });
    
    console.log('✓ Plugin found in plugins page');
    
    // Step 3: Navigate to data sources page to create a new data source
    await page.goto(`${GRAFANA_URL}/datasources`);
    await page.waitForLoadState('networkidle');
    
    // Click "Add new data source" button
    const addDataSourceButton = page.getByRole('link', { name: /add.*data source/i }).first();
    await addDataSourceButton.click();
    
    await page.waitForLoadState('networkidle');
    
    // Step 4: Search for our plugin and select it
    await page.getByPlaceholder('Search data source plugins').fill('ui');
    await page.waitForTimeout(1000);
    
    const pluginInList = page.locator(`a[href*="/plugins/${PLUGIN_ID}"]`).first();
    await expect(pluginInList).toBeVisible({ timeout: 10000 });
    await pluginInList.click();
    
    console.log('✓ Navigated to plugin configuration page');
    
    // Wait for the configuration page to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    
    // Step 5: Verify Hello Grafana component exists
    // The module.tsx.txt shows a HelloGrafana component and a Button with "Hello" text
    const helloButton = page.getByRole('button').filter({ hasText: 'Hello' }).first();
    await expect(helloButton).toBeVisible({ timeout: 10000 });
    
    console.log('✓ Hello button found in config editor');
    
    // Step 6: Click the Hello button to open the modal
    await helloButton.click();
    
    // Wait for modal to appear
    await page.waitForTimeout(1000);
    
    // Step 7: Verify modal dialog appears with expected content
    // The modal should have "Hello" as title and VerySpecialHello component with "GRAFANA" text (uppercase)
    const modalTitle = page.getByRole('heading', { name: 'Hello' });
    await expect(modalTitle).toBeVisible({ timeout: 5000 });
    
    // VerySpecialHello converts message to uppercase, so we should see "GRAFANA"
    const modalContent = page.locator('text=GRAFANA');
    await expect(modalContent).toBeVisible({ timeout: 5000 });
    
    console.log('✓ Modal opened with expected content');
    
    // Close the modal by clicking outside or dismiss button
    const dismissButton = page.locator('button[aria-label*="lose"], button[aria-label*="ismiss"]').first();
    if (await dismissButton.isVisible()) {
      await dismissButton.click();
    }
    
    console.log('✓ All E2E tests passed successfully!');
  });
});
