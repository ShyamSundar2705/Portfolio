const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto('file://' + path.resolve(__dirname, 'og-image.html'));
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.resolve(__dirname, '../public/og-image.png'),
    fullPage: false
  });
  await browser.close();
  console.log('og-image.png generated successfully');
})();
