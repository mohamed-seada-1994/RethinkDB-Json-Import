const r = require('rethinkdb');
const prizes = require('./prizes.json');

console.log(prizes.length);

r.connect({
  host: 'localhost',
  port: 28015
}).then(connection =>{
  connection.use('nobel');
  r.table('prizes')
    .insert(prizes)
    .run(connection)
    .then(_=>  connection.close());
});