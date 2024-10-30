document.addEventListener("DOMContentLoaded",() =>{
    const barsBtn = document.querySelector('.bars-button');
    const navBar = document.querySelector('header nav ul li');
    const closeBtn = document.querySelector('.close-btn');
    //const overlay = document.querySelector('.overlay');

    barsBtn.addEventListener('click', () =>{
       navBar.classList.add('active');
       closeBtn.classList.add('active');
       barsBtn.classList.add('active');
    })
    closeBtn.addEventListener('click', () =>{
        navBar.classList.remove('active');
       closeBtn.classList.remove('active');
       barsBtn.classList.remove('active');
    })
});