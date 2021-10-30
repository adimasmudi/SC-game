const { stdin, stdout } = require('process');

const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

let generated = false;
let angka;
let score = 100;
let right = false;


const generateAngka = function(){
    return Math.floor(Math.random()*20)+1;
}

const playAgain = function(){
    readline.question('Apakah anda mau main lagi? (y/n)',(ans)=>{
        if(ans === 'y'){
            generated = false;
            score = 100;
            right = false;
            game();
        }else{
            console.log('terimakasih sudah bermain')
        }
    })
}


const game = function(){

    if(!generated){
        angka = generateAngka();
        generated = true;
    }
    

    readline.question('masukkan angka dari rentang 1 - 20 : ',(answer)=>{
        if(angka === Number(answer)){
            console.log('jawaban anda benar')
            right = true;
        }else{
            if(angka > Number(answer)){
                score-=10;
                console.log('jawaban anda terlalu kecil')
            }else if(angka < Number(answer)){
                score-=10;
                console.log('jawaban anda terlalu besar')
            }
        }
        console.log(`score anda ${score}`)

        if(!right && score > 0){
            game();
        }else if(right){
            console.log('anda menang')
            playAgain();
        }else{
            console.log('game over')
            playAgain();
        }
        
    })


}

game();