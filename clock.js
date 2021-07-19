const time = document.querySelector('.time');


const tick = () =>{

    const now = new Date();

    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    let html =`<div>${hour}:${min}:${sec}</div>`;
    time.innerHTML=html;
} 

setInterval(tick,1000);