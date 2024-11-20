let names = prompt ('Ismingizni kiriting ')
let harf = prompt ('Bironta harf kiriting')


if  (names.includes(harf)) {
    alert(` ${names} ismida ${harf} harfi mavjud `)  
} else {
   alert( ` ${names} ismida ${harf} harfi mavjud emas `)  
}
