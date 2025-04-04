import { test, expect } from '@playwright/test';
import {multiplica, suma } from './matematica.spec'
 
test('Calculadora', async ({ page }) => {
const a:number = 10;
const b:number = 25;
const c:number = 25;

console.log(suma(a,b))
console.log(multiplica(c,b))
})