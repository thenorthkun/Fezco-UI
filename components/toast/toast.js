const toast = document.querySelector(".toast")
const btn1 = document.querySelector(".baseline")
const btn2 = document.querySelector(".top-right")
const btn3 = document.querySelector(".bottom-right")
const closeBtn = document.querySelector(".close-btn")

btn1.addEventListener('click', ()=>{
    toast.classList.add('baseline');
    btn2.disabled = true;
    btn3.disabled = true;
    setTimeout(()=>{
        toast.classList.remove('baseline')
        btn2.disabled = false;
        btn3.disabled = false;
    }, 3000);
})

btn2.addEventListener('click', ()=>{
    toast.classList.add('top-right');
    btn1.disabled = true;
    btn3.disabled = true;
    setTimeout(()=>{
        toast.classList.remove('top-right')
        btn1.disabled = false;
        btn3.disabled = false;
    }, 3000);
})

btn3.addEventListener('click', ()=>{
    toast.classList.add('bottom-right');
    btn1.disabled = true;
    btn2.disabled = true;
    setTimeout(()=>{
        toast.classList.remove('bottom-right')
        btn1.disabled = false;
        btn2.disabled = false;
    }, 3000);
})

