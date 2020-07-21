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
	})