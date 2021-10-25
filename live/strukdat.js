// data structures = cara bagaimana kita menempatkan suatu data

// array = tipedata yang bisa nyimpen banyak data
// object = index yang tidak harus angka


// looping
// console.log('saya belajar js')
// console.log('saya belajar js')
// console.log('saya belajar js')
// console.log('saya belajar js')
// console.log('saya belajar js')

// while, do while, for (for, for in, for of , forEach)

// let i = 0;
// while(i < 100){
//     console.log('saya belajar js')
//     i+=1;
// }

// let j = 0;
// do{
//     console.log('saya belajar js')
//     j++;
// }while(j < 5)


// for(let i = 0;i < 5;i++){
//     console.log('saya belajar js')
// }


// array
const angka = [1,2,3,4,5]
// for(i in angka){
//     console.log(angka[i])
// }

// for(i of angka){
//     console.log(i)
// }

// angka.forEach(function(i,index){
//     console.log(`${i} berada pada index ke-${index}`)
// })

// console.log('sebelum',angka)

// angka.push(10)

// console.log('sesudah',angka)

// angka.pop()

// console.log(angka)

// angka.shift()

// console.log('shift',angka)

// angka.unshift(12)

// console.log('unshift',angka)

// console.log(angka.length)
// console.log(angka[4])

// map, filter, reduce

// angka.map(a => console.log(a+a))

// const choice = angka.filter(a=> a % 2 === 0)
// console.log(choice)

// const all = angka.reduce((a,b)=> a+b)
// console.log(all)

// console.log(angka.sort(function(a,b){return b-a}))


// delimeter matching = kurung yang cocok
// (a+b)
// (a+b) - (b+a)
// ((a+b)- (a - (a+b)))
// (a+b) - (a + (a-b)

// siapkan array kosong
// let wadah = []
// // siapkan string testing
// const testing = '(a+b) - (a + (a-b))'
// // looping
// for(i of testing){
//     // kurung buka masukin ke wadah
//     if (i === '('){
//         wadah.push(i)
//     }else if(i === ')'){
//         if (wadah.length > 0){
//             wadah.pop()
//         }else{
//             wadah.push(i)
//         }
//     }
//     // kurung tutup, keluarkan sesuatu dari wadah
// }

// console.log(wadah)
// if(wadah.length === 0){
//     console.log('tepat')
// }else{
//     console.log('tidak tepat')
// }


// const person = {
//     nama : 'masmudi',
//     NIM : '200411100160',
//     asal : 'bangkalan',
//     sayHello(){
//         console.log(this)
//         console.log(`nama saya ${this.nama} dengan NIM ${person.NIM} dan berasal dari ${this.asal}`)
//     }
// }

// person.sayHello()

// const angka2 = [1,2,3,4,5,6,7,8]
// console.log(...angka2)
