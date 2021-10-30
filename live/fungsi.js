
// parameter : apa yang akan diproses

// function introduce(nama, asal, ukm){
//     console.log(`Nama Saya ${nama}`)
//     console.log(`Saya dari ${asal}`)
//     console.log(`saya anggota ${ukm}`)
// }

// introduce('Masmudi','Bangkalan','UKMFT-ITC')
// introduce('Fahmi','Surabaya','UKMFT-ITC')
// introduce('John','Jakarta','UKM Tech')


// return : untuk mengembalikan nilai

// const bil1 = 100;
// const bil2 = 20;

// function add(bil1,bil2){
//     return bil1+bil2;
// }

// console.log(add(bil1,bil2))

// jenis-jenis = function declaration, function expression, arrow function, recursion

// fucntion declaration
// function add(bil1,bil2){
//     return bil1+bil2;
// }

// function expresion
// const multiply = function(b1,b2){
//     return b1 * b2;
// }

// console.log(multiply(12,6))


// arrow function

// const example = (nama)=>{
//     console.log(`nama saya ${nama}`)
// }

// example('Masmudi')

// recursion / rekursif

// const pangkat = function(x,y){
//     if(y === 0){
//         return 1;
//     }else{
//         return x * pangkat(x,y-1)
//     }
// }
// 2 4
// 2 * pangkat(2,3)
// 2 * 2 * pangkat(2,2)
// 2 * 2 * 2 * pangkat(2,1)
// 2 * 2 * 2 * 2 * pangkat(2,0)
// 2 * 2 * 2 * 2 * 1 = 16

// console.log(pangkat(2,5))

// matematika

// const bulat = Math.ceil(2.5)
// console.log(bulat)


// game tebak angka (1-20)

// let generate = false;
// let score = 100;
// let right = false;
// let angka;

// const readline = require('readline').createInterface({
//     input : process.stdin,
//     output : process.stdout
// })

// const generateValue = function(){
//     return Math.floor(Math.random()*20) + 1
// }


// const game = function(){

//     if(!generate){
//         angka = generateValue();
//         generate = true;
//     }
    

//     readline.question('inputkan angka pada rentang 1-20 : ',(ans)=>{
        
//         if(ans > angka){
//             score-=10;
//             console.log('angka yang anda masukkan terlalu besar')
//         }else if(ans < angka){
//             score-=10;
//             console.log('angka yang anda masukkan terlalu kecil')
//         }else if(ans == angka){
//             console.log('angka yang anda masukkan benar')
//             right = true;
//         }

//         console.log(`skor anda adalah ${score}`)
        
//         if(!right && score > 0){
//             game();
//         }else if(right){
//             console.log('selamat anda menang')

//             readline.question('apakah anda mau main lagi? (y/n) : ',(jawab)=>{
//                 if(jawab === 'y'){
//                     right = false;
//                     generate = false;
//                     score = 100;
//                     game();
                    
//                 }
//             })
//         }
        
//     })
// }

// game();


// input nama pemain = readline
// skor si pemain -> object {nama : 'nama',skor : 'skor'}




// /////////////////////////////////////////////////////////

// scope

// function sapa(){
//     const nama = 'Masmudi'
//     console.log(`halo ${nama}`)
// }



// sapa()

// hositing

// nama()

// function nama(){
//     console.log('Masmudi')
// }



// closure : nested function yang fungsi anaknya itu punya akses ke fungsi induknya

function induk(x){
    
    function angka(y){
        console.log(x+y);
    }

    angka(10)
}

induk(12)
