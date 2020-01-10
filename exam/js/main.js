let num = 0;
let d1 = document.querySelector('.d1');
document.querySelector('.btn').onclick = function(){
  num++;
  if(num % 2 == 0){
    d1.style.display = 'block';
  }else if(num % 2 == 1){
    d1.style.display = 'none';
  }

}
