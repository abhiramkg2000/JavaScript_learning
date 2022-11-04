function Star(el, count, callback) {
    // Write a logic to create star rating problem
    let countStars = 0;
    let clicked = new Array(5);
    const star = document.querySelector(el);
    for (let i = 0; i < count; i++) {
      const icon = document.createElement("i");
      icon.setAttribute("class", "fa fa-star-o");
      star.append(icon);
    }
    const icons = document.querySelectorAll("i");
  
    icons.forEach((item, index) => {
      item.addEventListener("mouseenter", () => {
        if (clicked[index] !== true) {
          item.classList.remove("fa-star-o");
          item.classList.add("fa-star");
          clicked[index] = true;
          countStars++;
        }
        //console.log(clicked);
      })
  
      item.addEventListener("click", () => {
        if (clicked[index]) {
          item.classList.remove("fa-star-o");
          item.classList.add("fa-star");
        } else {
          item.classList.remove("fa-star");
          item.classList.add("fa-star-o");
        }
        callback(countStars);
      })
    })
    star.addEventListener("mouseleave", () => {
      icons.forEach((item, index) => {
        item.classList.remove("fa-star");
        item.classList.add("fa-star-o");
        clicked[index] = false;
        countStars = 0;
      })
    })
  }
  
  function getStar(value) {
    document.getElementById("display-star").innerHTML = value;
  }
  new Star("#star", 5, getStar);
  