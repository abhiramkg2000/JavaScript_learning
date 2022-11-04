const getRandomColors = function(){
    var ratio = 0.618033988749895;
    
    var hue = (Math.random() + ratio) % 1;
    var saturation = Math.round(Math.random() * 100) % 85;
    var lightness = Math.round(Math.random() * 100) % 85;

    var color = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + lightness + '%)';
    var oddColor = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + (lightness + 5) + '%)';

    return {
        color,
        oddColor
    }
}

const scoreText=document.querySelector(".score");
const container=document.querySelector(".container");
const Boxes=[];
let n=2;
let randomIndex=0;
let score=0;
let gridChangeCount=false;

function createBox(n){
  for(let i=0;i<n;i++)
  {
    const box=document.createElement("div");
    box.setAttribute("id",i);
    box.classList.add("box");
    container.append(box);
    Boxes.push(box);
  }
  if(gridChangeCount!==false)
  {
    container.style.gridTemplateColumns=container.style.gridTemplateColumns.concat(" auto");
  }
  else
  {
    container.style.gridTemplateColumns=container.style.gridTemplateColumns.concat(" auto auto");
  }
  
}
createBox(n*n);

function setColorOfBoxes()
{
    colors=getRandomColors();
    randomIndex=Math.floor(Math.random() * (n-1 - 0 + 1) + 0);
    console.log(randomIndex);
    Boxes.forEach((box)=>{
        if(parseInt(box.id)===randomIndex)
        {
            box.style.backgroundColor=colors.oddColor;
        }
        else
        {
            box.style.backgroundColor=colors.color;
        }
    })
    clickEvent();
}
setColorOfBoxes();

function deleteBox(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
        Boxes.pop();
    }
  }

function clickEvent()
{
    Boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            if(parseInt(box.id)===randomIndex)
            {
                deleteBox();
                gridChangeCount=true;
                score++;
                scoreText.innerHTML="Score:"+score;
                n=(n+1);
                createBox(n*n);
                setColorOfBoxes();
            }
            else
            {
                container.classList.add("shake");
                setTimeout(()=>{
                    container.classList.remove("shake");
                },800)
                deleteBox();
                n=2;
                createBox(n*n);
                setColorOfBoxes();
                score=0;
                scoreText.innerHTML="Score:"+score;
                container.style.gridTemplateColumns="auto auto";
            }
        })
    })
}