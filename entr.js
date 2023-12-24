let str = 'helloworld';

let alph= new Array();

for (let i = 0; i < str.length; i++){
 if (alph[str[i]])
  alph[str[i]]+=1;
 else
  alph[str[i]] = 1;
}
let power = 0;
for (let i in alph){
 power++;
 alph[i] /= str.length;
}
let entropy = 0;
if (power > 1){
 for (let i in alph){
  entropy -= alph[i]* Math.log(alph[i]);
 }
 entropy /= Math.log(power);
}
console.log(alph)
console.log(entropy)