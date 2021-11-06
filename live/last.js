
// variabel
// let = bisa diubah dan mendukung scoping, var = bisa diubah dan bersifat global, const = tidak bisa diubah

// ES6 = Ecma Script
// destructuring, closure, template literals , ` ${}`
// const arr = [1,2,3,4,5,6,7]
// console.log(...arr)

// let nama2 = 'John Doe';

// console.log(`Halo, ${nama2}`)

// tipe data 
// number, string, boolean
// let num = 10;
// const nama = 'John';
// var finish = true;

// operator
// aritmatik (+,-,*,/,%)
// logika (&&, ||, !)
// string (+) 

// let namaDepan = 'John';
// let namaBelakang = 'Doe';
// let namaLengkap = namaDepan + ' '+ namaBelakang;

// console.log(namaLengkap)

// percabangan
// if, else if, else, switch, ternary

// let hari = 'Sabtu';

// switch(hari){
//     case hari === 'Senin': console.log('Sekarang hari senin');
//     break;
//     case hari === 'Selasa': console.log('Sekarang hari selasa');
//     break;
//     case hari === 'Rabu': console.log('Sekarang hari rabu');
//     break;
//     case hari === 'Kamis': console.log('Sekarang hari kamis');
//     break;
//     case hari === "Jum'at": console.log('Sekarang hari jum"at');
//     break;
//     case hari === 'Sabtu': console.log('Sekarang hari Sabtu');
//     break;
//     case hari === 'Minggu': console.log('Sekarang hari Minggu');
//     break;
// }

// const umur = 18;
// umur > 17 ?  console.log('Dewasa') : console.log('Muda');


// data structures
// array -> [] , object -> {}
// const data = [1,2,3,4,4,5] , method -> push, pop, unshift, shift
// const identitas = {
//     nama : 'John',
//     umur : 20
// } 

// console.log(`Nama saya ${identitas.nama} dan saya berumur ${identitas.umur}`)



// JSON (javascript object notation), database non relational, response API

// perulangan
// for (in, of, angka) , while (while do, do while), forEach

// const data = ['a','b','c']

// for (d of data){
//     console.log(d)
// }

// for (i = 0; i <= 10; i++){
//     console.log(`bilangan ke ${i}`)
// }

// forEach

// const data = ['a','b','c']
// // data.forEach(function(d,idx){
// //     console.log(`data pada index ke-${idx} adalah ${d}`)
// // })

// // map, filter, reduce

// // fungsi
// // ada 4 : function declaration, function expression, arrow function, recursion

// const hellow = ()=>{

// }


// dasar OOP yang membahas 4 pilar utama

// OOP = Object Oriented Programming
// object 

// ada 3 : tipe data object, function, class

// const person = {
//     nama : 'John',
//     usia : 20,

//     Hello(){
//         console.log(`Halo, ${this.nama} yang berusia ${this.usia} tahun`)
//     }
// }

// person.Hello()

// function Person(){
//     nama = 'John';
//     usia = 21;

//     this.Hello(){
//         console.log(`Halo,${this.nama} yang berusia ${this.usia} tahun`)
//     }
// }

// const person1 = new Person();
// person1.Hello()

// menggunakan class
// ada 4 pilar utama

// abstraction -> menyembunyikan bagian yang kompleks


// inheritance -> pewarisan

// encapsulation -> melindungi bagian tertentu, untuk tidak bisa diakses dari luar object itu

// polymorphism -> penggunaan satu object utk beberapa keperluan
// john -> laki-laki -> seorang suami dari istrinya, seorang ayah dari anaknya, seorang pekerja di perusahaan tertentu


// class Person{
    
//     setName(name){
//         this.#name = name;
//     }

//     setAge(age){
//         this.#age = age;
//     }

//     greeting(){
//         console.log(`Halo, ${this.#nama ? this.#name : 'no name'} yang berusia ${this.#age ? this.#age : 'no age'} tahun`)
//     }
// }


// const person1 = new Person;

// person1.setName('John')
// person1.setAge(21)
// person1.greeting()

// class Animal{
//     constructor(kaki, eat, kind){
//         this.kaki = kaki;
//         this.eat = eat;
//         this.kind = kind;
//     }

//     walking(){
//         console.log('i am walking')
//     }
// }

// class Cat extends Animal{

//     sound(){
//         console.log(`saya adalah kucing, yang memiliki ${this.kaki}, memakan ${this.eat}, dan saya termasuk ${this.kind}`)
//     }
// }

// class Tiger extends Animal{

//     sound(){
//         console.log(`saya adalah Harimau, yang memiliki ${this.kaki}, memakan ${this.eat}, dan saya termasuk ${this.kind}`)
//     }
// }

// class Chicken extends Animal{

//     sound(){
//         console.log(`saya adalah ayam, yang memiliki ${this.kaki}, memakan ${this.eat}, dan saya termasuk ${this.kind}`)
//     }
// }

// const cat1 = new Cat(4,'ikan','carnivora')
// const tiger1 = new Tiger(4,'daging','carnivora')
// const ayam1= new Chicken(2,'jagung','herbivora')
// cat1.sound()
// cat1.walking()

// tiger1.sound()
// tiger1.walking()

// ayam1.sound()
// ayam1.walking()


// const Person = function(){

//     this.nama = 'John';

//     this.greeting = function(){
//         console.log(`Halo, ${this.nama}`)
//     }
// }

// const orang = new Person;

// orang.greeting()

// bank -> input , withdraw, ngeliat history, ngeliat saldo
// class Bank{
//     constructor(){
//         this.history = [100,300,500,-250,140,-230]
//     }

//     input(uang){
//         this.history.push(uang)
//     }

//     withdraw(uang){
//         this.history.push(-uang)
//     }

//     displayHistory(){
//         this.history.forEach(function(h){
//             if (h > 0){
//                 console.log(`anda mendeposit sebesar ${h}`)
//             }else{
//                 console.log(`anda mengambil sebesar ${-h}`)
//             }
//         })
//     }

//     displaySaldo(){
//         console.log(this.history.reduce((a,b)=>a+b))
//     }
// }

// const bank = new Bank;

// bank.displayHistory()
// bank.input(400)
// bank.displayHistory()
// bank.displaySaldo()
