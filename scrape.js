var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true }); 

nightmare
  .goto('https://turing.io/team/')
  .click('a[href="/team/instructors"]')
  .wait('h3')
  .evaluate(function () {
    var nameNodes = document.querySelectorAll('h3');
    var list = [].slice.call(nameNodes);
    return list.map(function(node){
      return node.innerText
    });
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
