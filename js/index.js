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
var connection = new ActiveXObject("ADODB.Connection") ;

var connectionstring="Data Source=<server>;Initial Catalog=<catalog>;User ID=<user>;Password=<password>;Provider=SQLOLEDB";

connection.Open(connectionstring);
var rs = new ActiveXObject("ADODB.Recordset");

rs.Open("SELECT * FROM table", connection);
rs.MoveFirst
while(!rs.eof){
   document.write(rs.fields(1));
   rs.movenext;
}

rs.close;
connection.close; 
