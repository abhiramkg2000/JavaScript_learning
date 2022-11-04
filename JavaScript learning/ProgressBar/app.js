let i = 0;
let count=0,countvalue=0;
const btn=document.querySelector(".btn");
btn.innerHTML="Run ";

btn.addEventListener("click",async function display(){
  count++;
  countvalue=count;
  btn.innerHTML="Run "+countvalue;
  for(let i=0;i<count;i++)
  {
    await sleep(2000);
    move();
    
  }
  count=0;
})

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function move() {
  
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        countvalue--;
        btn.innerHTML="Run "+countvalue;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}