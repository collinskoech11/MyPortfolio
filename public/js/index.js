document.getElementById('btn').addEventListener('click',
function() {
	document.querySelector('.desc').style.display = 'block';
	document.querySelector('#btn').style.display = 'none';
	document.querySelector('.header-opt').style.display = 'none';
	const btn = document.querySelector('.btn');
	btn.classList.toggle("script");
});
document.querySelector('.close').addEventListener('click',
function() {
	document.querySelector('.desc').style.display = 'none';
	document.querySelector('.tweetPop').style.display = 'none';
	document.querySelector('#btn').style.display = 'block';
	document.querySelector('.header-opt').style.display = 'inline-block';
});
document.querySelector('.tab').addEventListener('click',
function(){
	const stat = document.querySelector('.stat');
	stat.classList.toggle('move', behavior='smooth');
});
document.getElementById('closeo').addEventListener('click',
	function(){
	document.querySelector('.tweetPop').style.display = 'none';
	});

document.getElementById('dep').addEventListener('click',
	function() {
		document.querySelector('.content-wrapper').style.display = 'none';
		document.querySelector('.os-wrapper').style.display = 'none';
		document.querySelector('.dep-wrapper').style.display = 'block';
	});

document.getElementById('web').addEventListener('click',
	function() {
		document.querySelector('.content-wrapper').style.display = 'block';
		document.querySelector('.os-wrapper').style.display = 'none';
		document.querySelector('.dep-wrapper').style.display = 'none';
	});
document.getElementById('os').addEventListener('click',
	function() {
		document.querySelector('.content-wrapper').style.display = 'none';
		document.querySelector('.os-wrapper').style.display = 'block';
		document.querySelector('.dep-wrapper').style.display = 'none';
	});
window.addEventListener("scroll", 
	function() {
		var button = document.querySelector("#low");
		low.classList.toggle("show", window.scrollY > 100);
		});
window.addEventListener("scroll", 
	function() {
		var header = document.querySelector("#myHeader");
		myHeader.classList.toggle("sticky", window.scrollY > 60);
	});
window.addEventListener("scroll",
	function(){
		const btn =document.querySelector(".btn");
		btn.classList.toggle("script", window.scrollY > 100);
	});
window.addEventListener("scroll",
	function(){
		const jamboone = document.querySelector(".jamboone");
		jamboone.classList.toggle("scroll",window.scrollY > 400);

		const jambotwo = document.querySelector(".jambotwo");
		jambotwo.classList.toggle("scroll",window.scrollY > 600);

		const jambothree = document.querySelector(".jambothree");
		jambothree.classList.toggle("scroll",window.scrollY > 800);

		const jambofour = document.querySelector(".jambofour");
		jambofour.classList.toggle("scroll",window.scrollY > 1000);

		const jambofive = document.querySelector(".jambofive");
		jambofive.classList.toggle("scroll",window.scrollY > 1200);

	});
document.getElementById('low').addEventListener('click',
	function(){
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});

document.getElementById('twitter').addEventListener('click',
	function(){
		document.querySelector(".tweetPop").style.display = "block";
	});
	
	anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



  window.onload =  function(){setTimeout(hidePopup,5000)};
  	function hidePopup(){
		  document.querySelector('.prep').style.display='none';
	  };

/** 
*	  window.onload = function(){setTimeout(showText,10000)};
*	  	function showText(){
*			  document.querySelector('.loadtxt').style.display="block";
*			  document.querySelector('.loadimg').style.display="none";
*		  };

Display error message on failed load
*/

let myLabels = document.querySelectorAll('.lbl-toggle','.lbl-toggle1');

Array.from(myLabels).forEach(label => {
  label.addEventListener('keydown', e => {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });
})