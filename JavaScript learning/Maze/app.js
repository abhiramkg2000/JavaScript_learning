// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// let selectedColor;
// let Boxes=[];
// let r=0,c=0,lastIndex=0;

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// function PixelArt(el, rows, cols) {
//     // write logic to create pixel art grid.
//     const grid=document.querySelector(el);
//     let k=0;
//     for(let i=0;i<rows;i++)
//     {
//         grid.style.gridTemplateColumns=grid.style.gridTemplateColumns.concat(" auto");
//         for(let j=0;j<cols;j++)
//         {
//             const box=document.createElement("div");
//             box.setAttribute("id",k);
//             box.classList.add("box");
//             grid.append(box);
//             Boxes.push(box);
//             k++;
//         }
//     }
//     const box=document.createElement("div");
//     box.setAttribute("id",k);
//     box.classList.add("box");
//     grid.append(box);
//     box.style.backgroundColor="red";
//     Boxes.push(box);
//     r=rows,c=cols;
// }

// let boxArray=new Array(10);
// let k=0;
// for(let i=0;i<10;i++)
// {
//     boxArray[i]=new Array(10);
//     for(let j=0;j<10;j++)
//     {
//         boxArray[i][j]=Boxes[k];
//         k++;
//     }
// }

//new PixelArt("#grid", 10, 10);

// Boxes.forEach((box)=>{
//     if(parseInt(box.id)<r*c)
//     {
//         box.addEventListener("click",()=>{
//             box.style.backgroundColor=selectedColor;
//             path();
//         })
//         // box.addEventListener("dragover",(event)=>{
//         //    //console.log(event);
//         //    event.target.style.backgroundColor=selectedColor;
//         // })
//     }
// })

// Boxes.forEach((box)=>{
//     if(parseInt(box.id)>=r*c)
//     {
//         // box.setAttribute("draggable","true");
//         // box.addEventListener("drag",()=>{
//         //     selectedColor=box.style.backgroundColor;
//         // })
//         box.addEventListener("click",()=>{
//             selectedColor=box.style.backgroundColor;
//         })
//     }
// })

// function path()
// {
//     Boxes.forEach((box)=>{
//         if(parseInt(box.id)<r*c)
//         {
//             if(box.style.backgroundColor==="red")
//             {
//                 console.log("id: ",box.id);
//                 if(pathArray.includes(parseInt(box.id))===false)
//                 {
//                     destination.push(box);
//                     pathArray.push(parseInt(box.id));
//                 }
//             }
//         }
//     })
// }
// const btn=document.querySelector(".btn");
// btn.addEventListener("click",startPath);

// async function startPath(){
//     let k;
//     if(pathArray[0]>pathArray[1])
//     {
//         k=9;
//         let diagonalDone;
//         for(let i=pathArray[0]-1;i>pathArray[1]+9;i--)
//         {
//             //console.log(i);
//             k--
//             if(k===0&&i%10<=pathArray[1]%10)
//             {
//                 k=9;
//                 await sleep(500);
//                 Boxes[i].style.backgroundColor="yellow";
//                 diagonalDone=i;
//             }
//         }
//         for(let j=diagonalDone;j>pathArray[1];j--)
//         {
            
//             if(j%10===diagonalDone%10)
//             {
//                 console.log("j"+j);
//                 await sleep(500);
//                 Boxes[j].style.backgroundColor="yellow";
//             }
//         }
//     }
//     else if(pathArray[0]<pathArray[1])
//     {
//         k=11;
//         let diagonalDone;
//         console.log(Math.floor(pathArray[0]/10)%10+" "+Math.floor(pathArray[1]/10)%10);
//         if(pathArray[0]%10===pathArray[1]%10)
//         {
//             for(let i=pathArray[0]+1;i<pathArray[1];i++)
//             {
//                 if((i+10)%10===pathArray[1]%10)
//                 {
//                     // console.log("vertical: ",i);
//                     await sleep(500);
//                     Boxes[i].style.backgroundColor="yellow";
//                 }
//             }
//         }
//         else if(Math.floor(pathArray[0]/10)%10===Math.floor(pathArray[1]/10)%10){
            
//             for(let i=pathArray[0]+1;i<pathArray[1];i++)
//             {
//                 console.log("horizontal: ",i);
//                 await sleep(500);
//                 Boxes[i].style.backgroundColor="yellow";
//             }
//         }
//         else
//         {
//             for(let i=pathArray[0]+1;i<pathArray[1];i++)
//             {
//                 //console.log(i);
//                 k++
//                 // if(i%10===pathArray[1]%10&&(i/10)%10===((pathArray[1]/10)-1)%10)
//                 // {
//                 //     console.log("if working");
//                 //     await sleep(500);
//                 //     Boxes[i].style.backgroundColor="yellow";
//                 // }
//                 // else if(i%10<=pathArray[1]%10&&k%11===0)
//                 // {
//                 //     k=11;
//                 //     console.log("else working");
//                 //     await sleep(500);
//                 //     Boxes[i].style.backgroundColor="yellow";
//                 // }
//                 if(i%10<=pathArray[1]%10&&k%11===0)
//                 {
//                     k=11;
//                     console.log("else working");
//                     await sleep(500);
//                     Boxes[i].style.backgroundColor="yellow";
//                     diagonalDone=i;
//                 }
//             }
//             for(let j=diagonalDone;j<pathArray[1];j++)
//             {
                
//                 if(j%10===diagonalDone%10)
//                 {
//                     console.log("j"+j);
//                     await sleep(500);
//                     Boxes[j].style.backgroundColor="yellow";
//                 }
//             }
//         }
//     }
//     //console.log("btn clicked ",pathArray)
    
// }




let grid_size_x = 10;
let grid_size_y = grid_size_x;
let square_size_height = 40;
let square_size_width = 40;
let current_scale = 1.0;
let square_count=0;
let path_len = grid_size_x;
let grid_matrix = [];
let pathArray=[];
let starting_node;
let destination_node;
let grid = document.getElementById("grid");

// function init() {
//   draw_grid(grid_size_x, grid_size_y);
//   grid.addEventListener("wheel", scroll_handler);
// }

function draw_grid(height, width) {
  let grid_width = width * square_size_width;

  grid.style.width = `${grid_width}px`;

  for (let i = 0; i < height; i++) {
    grid_matrix.push([]);
    grid.style.gridTemplateColumns=grid.style.gridTemplateColumns.concat(" auto");
    for (let j = 0; j < width; j++) {
      let square = document.createElement("div");
      square.classList.add("box");
      square.style.height = `${square_size_height}px`;
      square.style.width = `${square_size_width}px`;
      square.dataset.i = i;
      square.dataset.j = j;
      square.addEventListener("click", square_click);
      grid.appendChild(square);
      grid_matrix[i].push(square);
    }
  }
}

draw_grid(grid_size_x, grid_size_y);

const start=document.querySelector(".start");
start.addEventListener("click",()=>draw_path(destination_node));

const clear=document.querySelector(".clear");
clear.addEventListener("click",clear_path);



function square_click(event) {
    square_count++;
    if(square_count<=2)
    {
        if (starting_node === undefined) {
            starting_node=event.target;
            event.target.style.backgroundColor="red";
        } else {
            event.target.style.backgroundColor="red";
            destination_node= event.target;
        }
    }
}

function clear_path() {
  for (let elem of grid_matrix) {
    for(let j of elem)
    {
        j.style.backgroundColor="white";
    }
  }
  square_count=0;
  starting_node=undefined;
  destination_node=undefined;
}

async function draw_path(target) {
//   console.log(selected.id+"=>"+destination[0].id)
  if (starting_node === undefined) return;
  let path = shortest_path(starting_node, target, path_len-1);
  pathArray=path;
  path.pop();
  for (let elem of path) {
    await sleep(400);
    elem.style.backgroundColor="yellow";
  }
}

function shortest_path(start, end, max = Infinity) {
  if (start === end) return [];
  let path = [];
  let c = 0;

  while (start !== end) {
    start = get_next_shortest_node(start, end);
    path.push(start);

    if (c === max) {
      break;
    }

    c++;
  }

  return path;
}

function get_next_shortest_node(start, end) {
    let i = Number(start.dataset.i),
    j = Number(start.dataset.j);
  let end_x = end.offsetLeft;
  let end_y = end.offsetTop;
  let paths = [
    (grid_matrix[i - 1] || [])[j - 1], // diag
    (grid_matrix[i] || [])[j - 1],
    (grid_matrix[i + 1] || [])[j - 1], // diag
    (grid_matrix[i + 1] || [])[j],
    (grid_matrix[i + 1] || [])[j + 1], // diag
    (grid_matrix[i] || [])[j + 1],
    (grid_matrix[i - 1] || [])[j + 1], // diag
    (grid_matrix[i - 1] || [])[j],
  ];

  let shortest = {
    dist: Infinity,
    elem: undefined,
  };

  for (let path of paths) {
    if (path === undefined) continue;
    let dist =
      Math.abs(path.offsetTop - end_y) + Math.abs(path.offsetLeft - end_x);

    if (dist < shortest.dist) {
      shortest.dist = dist;
      shortest.elem = path;
    }
  }
//   console.log(shortest);
  return shortest.elem;
}

// function scroll_handler(event) {
//   event.preventDefault();

//   current_scale += event.deltaY * -0.005;

//   current_scale = Math.min(Math.max(0.125, current_scale), 4);

//   grid.style.transform = `translate(0%,0%) scale(${current_scale})`;
// }

// init();