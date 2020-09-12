const e = require('express')
const a = e()
const p = require('body-parser')

a.use(e.static('.'));
a.use(p.json());



let passwort = '';
for ( let i = 0; i < 2; i++ ){
  let zeichen;
  do {
    zeichen = String.fromCharCode( Math.round(Math.random()*255) )
  } while ( ! zeichen.match(/[-_@a-z0-9]/i) )
  passwort += zeichen;
}
console.log('passwort: ' + passwort);

a.post("/login",(req,res)=>{
  let { pass } = req.body;
  if ( pass === passwort ){
    res.json({status:'success'});
  } else {
    res.json({status:'fail'});
  }
});






a.listen(9922,e=>console.log('server bereit auf port '+9922));
