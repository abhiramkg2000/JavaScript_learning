function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let selectedColor;
let Boxes=[];
let r=0,c=0,lastIndex=0;

function PixelArt(el, rows, cols) {
    // write logic to create pixel art grid.
    const grid=document.querySelector(el);
    let k=0;
    for(let i=0;i<rows;i++)
    {
        grid.style.gridTemplateColumns=grid.style.gridTemplateColumns.concat(" auto");
        for(let j=0;j<cols;j++)
        {
            const box=document.createElement("div");
            box.setAttribute("id",k);
            box.classList.add("box");
            grid.append(box);
            Boxes.push(box);
            k++;
        }
    }
    for(let i=0;i<rows;i++)
    {
        const box=document.createElement("div");
        box.setAttribute("id",k);
        box.classList.add("box");
        grid.append(box);
        k++;
        box.style.backgroundColor=getRandomColor();
        Boxes.push(box);
    }
    r=rows,c=cols;
}

new PixelArt("#grid", 10, 10);

Boxes.forEach((box)=>{
    if(parseInt(box.id)<r*c)
    {
        box.addEventListener("click",()=>{
            box.style.backgroundColor=selectedColor;
        })
        box.addEventListener("dragover",(event)=>{
           console.log(event);
           event.target.style.backgroundColor=selectedColor;
        })
    }
})

Boxes.forEach((box)=>{
    if(parseInt(box.id)>=r*c)
    {
        box.setAttribute("draggable","true");
        box.addEventListener("drag",()=>{
            selectedColor=box.style.backgroundColor;
        })
        box.addEventListener("click",()=>{
            selectedColor=box.style.backgroundColor;
        })
    }
})