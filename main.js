var paragraphs = document.querySelectorAll('.parrafo');

var p1 = paragraphs[0];
var p2 = paragraphs[1];

console.log(p1);
console.log(p2);


function switchClass(el) {
	if (el.classList.contains('on')) {
		el.classList.remove('on');
		el.classList.add('off');
	} else if (el.classList.contains('off')) {
		el.classList.remove('off');
		el.classList.add('on');
	} else {
		el.classList.add('on');
	}
}