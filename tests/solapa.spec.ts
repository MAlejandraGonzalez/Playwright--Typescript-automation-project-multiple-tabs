import { test, expect } from '@playwright/test';

test('Inicio apertura solapa', async ({ page }) => {
  await page.goto('https://institutoweb.com.ar/test/pop/solapa.html');
  // Abrir una nueva solapa / pestaña
  // espera a que se abra una nueva solapa
  const nuevaSolapa = page.context().waitForEvent('page')
  await page.click('#mi-enlace')
  await page.waitForTimeout(5000) 
  const nuevaPage = await nuevaSolapa
  await nuevaPage.waitForLoadState('domcontentloaded')
  const la_url = nuevaPage.url()
  expect(la_url).toBe('https://institutoweb.com.ar/test/pop/popover.html')
  console.log(la_url)
  await nuevaPage.click('#mi-boton')
  await page.waitForTimeout(5000)
  await nuevaPage.click('#close-popover')
  await page.waitForTimeout(5000)
  await nuevaPage.close()
  await page.waitForTimeout(5000) 
});

