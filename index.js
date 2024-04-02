


// let password=prompt('masukan password');

// if(password.length >= 6){
//     if(password.indexOf(' ')== -1){
//         console.log("password valid");
//         alert("password valid");
//     }else{
//         console.log("password tidak boleh ada spasi");
//         alert("password tidak ada boleh spasi");  
//     }
// }else{
//     console.log('passwod minimal 6 karakter');
//     alert("password minimal 6 karakter");
// }

// const password = 'pass123';

// let guess = prompt('masukan password anda');
// while(guess !== password){
//      guess = prompt('masukan password anda lagi');
// }
// alert("password anda benar");

// let input = prompt('coba tulis sesuatu');

// while(true){
//     input = prompt(input);

//     if(input == 'stop') break;
    
// }
// alert('ok ..');


// const maxAngka = prompt('sebutkan angka maksimal untuk acak');
// console.log(maxAngka);

// const acak = Math.floor(Math.random()*maxAngka)+1;
// console.log(acak);
// let tebak = parseInt(prompt('tebak angkanya'));

// while(tebak !== acak){
//     if(tebak > acak){
//          tebak = parseInt(prompt('terlalu gede'));
//     } else if(tebak<acak){
//          tebak = parseInt(prompt('terlalu kecil'));
//     }

// }
// alert('mantap jawaban anda benar');


  const angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  const arrayGanjil = angka.filter((a)=>a%2!== 0);
  const arrayGenap = angka.filter(b=> b%2==0 );


//  const kalidua = angka.map(function(angk){
//      return angk*2;
//  });
//  console.log(kalidua);


// angka.forEach(function (el){
//      if(el %3 === 0 ){
//           console.log(el);
//      }
// });

// const animes =[
// {title:'bakugan',
// rating:4
// },
// {
//      title:'naruto',
//      rating:9 
// },
// {
//      title: 'one pieace',
//      rating: 9 
// },
// ];

// const animeRatingTinggi = animes.map(function(anime){
//      if(anime.rating >8){
//           return `${anime.title} rating:${anime.rating}`;
//      }
// });

// animes.forEach(function(anime){
//      console.log(`${anime.title} ratingnya itu ${anime.rating}/10`);
// });

// const perpangkatan = x=>(x*x);

// console.log(perpangkatan(1354));

// const add = (a,b) => a+b;
// console.log(add(2,4));

// console.log('haloo..')

// setTimeout(() => {
//      console.log(`kok ga ada yg jawab??`);
// }, 7000);
// console.log(`saya berangkat yaa`);


// const interval =setInterval(() => {
//      console.log(Math.floor(Math.random()*100)+1);
// },2000);


// setTimeout(() => {
//      clearInterval(interval);
     
// }, 10000);
