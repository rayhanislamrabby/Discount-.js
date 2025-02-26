// musti lavel condition 


// discund amaunt 

const price = 100 ;

if (price >= 500 ){
// 20% discund
    const discund = price  * 20 / 100;
const payamaunt = price - discund;
    console.log(payamaunt)
}

else if ( price >= 100 ) {
const discund = price * 10 / 100;
const payamaunt = price - discund ;
console.log(payamaunt);
}


else {
    console.log(price);
}

