function init() {
//  key: 'https://docs.google.com/spreadsheets/d/0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE/pubhtml',
  Tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE/pubhtml',
    callback: function (data, tabletop) {
      console.log(data)
    },
    simpleSheet: true
  })
}
console.log('In index.js');
init();
