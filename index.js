const puppeteer = require('puppeteer');

(async () => {
    
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    // link da página à acessar
    await page.goto ('https://pokemon.fandom.com/pt-br/wiki/Pok%C3%A9dex_Nacional');
    // fechar o anúncio
    await page.click ('[class="NN0_TB_DIsNmMHgJWgT7U XHcr6qf5Sub2F2zBJ53S_"]');
    // clicar na aba de pesquisa
    await page.click ('[href="/pt-br/wiki/Especial:Busca"]');
    // escrever no campo de pesquisa
    await page.type('pikachu')

   // await browser.close();

})();