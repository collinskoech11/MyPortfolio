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
	document.querySelector('#btn').style.display = 'block';
	document.querySelector('.header-opt').style.display = 'inline-block';
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

	})
document.getElementById('low').addEventListener('click',
	function(){
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});


	