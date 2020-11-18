
// let angle = 45
 let x=0;
 let y=0;

// let angle = prompt('write corner');

function centerliseBox() {
    var x = (screen.width - 100)/2
    var y = (screen.height- 100) / 2

    box.style.left = `${x}px`   
    box.style.top  = `${y}px`
}

function moveBox() {
    const distance = 1;
    const { dx, dy } = getMovePosition(30, distance)
      x += dx;
      y += dy;
    console.log(x,y)
    box.style.left = `${x}px`
    box.style.top = `${y}px`
}

 centerliseBox();
setInterval(moveBox, 1000 / 60) 





