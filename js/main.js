'use strict';


{
 
 const btn = document.getElementById('btn');

 btn.addEventListener('click', () => {
    //  const results = ['大吉','中吉','小吉','凶','大凶'] // 配列文を使う。
    //  const results = ['大吉','大吉','大吉','大吉','凶'] // 確率をかえる。
    //  const n = Math.floor(Math.random()*results.length); //要素の数が変わっても書き換える必要なし。
    //  btn.textContent = results[n];
    //  btn.textContent = results[Math.floor(Math.random()*results.length)];
    const n = Math.random();      
    if (n < 0.05) {              // 確率を設定できる。
        btn.textContent = '大吉'; // 5% 
    }  else if (n < 0.2) {
        btn.textContent = '中吉'; // 15%
    } else {
        btn.textContent = '凶'; // 80%
    }

//   switch(n) {
//      case 0:
//          btn.textContent ="大吉"; 
//          break;
//      case 1:
//          btn.textContent ="中吉"; 
//          break;
//      case 2:
//     　　　btn.textContent ="小吉"; 
//          break;
//      case 3:
//          btn.textContent ="凶"; 
//          break;
//      case 4:
//          btn.textContent ="大凶"; 
//          break;    
//   }

 });

}