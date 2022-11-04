const grid=document.querySelector(".grid");
const boxes=document.querySelectorAll(".box");
let boxColor=false;
let k=0;
//console.log(boxes);
let boxArray=new Array(8);

for(let i=0;i<8;i++)
{
    boxArray[i]=new Array(8);
    for(let j=0;j<8;j++)
    {
        boxArray[i][j]=boxes[k];
        k++;
    }
}

//To set color of alternate boxes as white and black
for(let i=0;i<8;i++)
{
    for(let j=0;j<8;j++)
    {
        if ((i + j) % 2 != 0) 
        {
            k=((i)*8)+j;
            boxes[k].style.backgroundColor="#000"
        }
       
    }
}
//To change the color of the diagonals of a particular box which is clicked.
//console.log(boxArray);
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        function diagonals(arr, h, w, n) {
        var nRow = Math.floor(n / w);
        var nCol = n % w;

        let LTR = [];
        for (let r = nRow - Math.min(nRow, nCol), c = nCol - Math.min(nRow, nCol); r < h && c < w; r++, c++) LTR.push(arr[r * w + c]);

        let RTL = [];
        for (let r = nRow - Math.min(nRow, w - nCol - 1), c = nCol + Math.min(nRow, w - nCol - 1); r < h && 0 <= c; r++, c--) RTL.push(arr[r * w + c]);

        return [LTR, RTL];
        }

        //console.log(diagonals(boxes, 8, 8, parseInt(box.id)));
        const [LTR,RTL]=diagonals(boxes, 8, 8, parseInt(box.id));

        LTR.forEach((box)=>{
            box.style.backgroundColor="red";
        })

        RTL.forEach((box)=>{
            box.style.backgroundColor="red";
        })
    })
})

/*
boxes.forEach((box)=>{
    box.addEventListener("mouseover",()=>{
        box.style.backgroundColor="#e2e2e2";
    })
    box.addEventListener("mouseleave",()=>{
        box.style.backgroundColor="aliceblue";
    })
})*/