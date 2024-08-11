const parent = document.querySelector("#parent")
const child = document.querySelectorAll(".child")
const grandChild = document.querySelectorAll(".grandchild")
const timerElement = document.querySelector("#timer")

parent.addEventListener("click",function(e){
    console.log(e.srcElement)
})

const forTheTimer = ()=>{
    let countDownSeconds = 60

    const updateCounter = ()=>{
        const minutes = Math.floor(countDownSeconds / 60)
        const seconds = countDownSeconds % 60
        const formattedTime = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
        timerElement.textContent = formattedTime 
    }

    const interval = ()=>{
        if(countDownSeconds > 0){
            countDownSeconds--
            updateCounter()
        }else{
            clearInterval(timer)
            alert("The Bomb has been Planted")
        }
    }

    const timer = setInterval(interval, 1000);

}   

forTheTimer()