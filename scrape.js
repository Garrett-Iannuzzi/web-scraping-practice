const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true }); 

nightmare
  .goto('https://webscraper.io/test-sites')
  .click('a[href="/test-sites/e-commerce/static"]')
  .wait('h4')
  .evaluate(function () {
    const priceNodes = document.querySelectorAll('.price');
    const list = [].slice.call(priceNodes);
    return list.map(node => node.innerText)
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });


