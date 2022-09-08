let lastRenderTime=0
let SNAKE_SPEED=3
function main(timeStamp){
    const timediff=(timeStamp-lastRenderTime)/1000
    window.requestAnimationFrame(main)
    if(timediff<1/SNAKE_SPEED) return

    lastRenderTime=timeStamp

}

window.requestAnimationFrame(main)