document.getElementById('btn').addEventListener('click',
function() {
	document.querySelector('.desc').style.display = 'block';
	document.querySelector('#btn').style.display = 'none';
	document.querySelector('.header-opt').style.display = 'none';
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
		document.querySelector('.dep-wrapper').style.display = 'none;'
	});
window.addEventListener("scroll", 
	function() {
		var button = document.querySelector("#low");
		low.classList.toggle("show", window.scrollY > 100);
		});
window.addEventListener("scroll", 
	function() {
		var header = document.querySelector("#myHeader");
		myHeader.classList.toggle("sticky", window.scrollY > 100);
		
	});
