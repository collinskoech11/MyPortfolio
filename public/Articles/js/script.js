window.onload=function(){setTimeout(showPopup,2000)};
function showPopup(){
    const pop = document.querySelector('.pop');
    pop.classList.toggle("popup");
}
document.querySelector('.close').addEventListener('click', 
    function(){
        document.querySelector('.popup').style.display = 'none'
    }
);