import { test, expect } from '@playwright/test';

test('Inicio apertura alerta', async ({ page }) => {
  await page.goto('https://institutoweb.com.ar/test/pop/alerta.html');
  ////////////////////////////Espera la alerta////////////////////////////////////////////
  // espera que la alerta aparezca
  const alertaPromesa = new Promise((resolve) => {
    // capturar acciones paralelas del navegador
      page.on('dialog', async (dialog)=>{
            // manejar los datos y controles de la alerta
            console.log(dialog.message())
            await page.waitForTimeout(5000) 
            await dialog.accept()
      })
  }
) 
//////////////////////////////////////////////////////////////////////////
  // Hago click sobre el botón que convoca a la alerta
  await page.locator('#mi-boton').click()

  await page.waitForTimeout(5000) 
});

