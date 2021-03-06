
var tasks = new Array();
tasks.push({'task': 'tarea1', 'done':true});
tasks.push({'task': 'tarea2', 'done':true});
tasks.push({'task': 'tarea3', 'done':true});
tasks.push({'task': 'tarea4', 'done':true});
tasks.push({'task': 'tarea5', 'done':true});
tasks.push({'task': 'tarea6', 'done':true});
tasks.push({'task': 'tarea7', 'done':true});

var input = document.getElementById('task');
var list = document.getElementById('list');
var btnAdd = document.getElementById('add');
var btnClean = document.getElementById('clean');
var btnImport = document.getElementById('getData');

function load(tasks) {
	list.innerHTML = '';

	for(var i = tasks.length - 1; i >= 0; i--) {
		var item = document.createElement('li');
		item.textContent = tasks[i].task;
		if (tasks[i].done) {
			item.classList.add('done');
		}
		list.appendChild(item);
	}
}

function existe(value) {
	for (var i = 0; i < list.chidren; i++) {

	}
	return false;
}

function agregar() {
	if (existe(input.value)) {
		if(item.classList.contains('done')){
			item.classList.toggle('done');
		}
	} else {
		var item = document.createElement('li');
		item.textContent = input.value;
		list.appendChild(item);
		input.value = '';
		console.log("agrego");
	}
}

function limpiar() {
	var items = document.querySelectorAll(".done");

	Array.prototype.forEach.call(items, function(el, i) {
		list.removeChild(el);
	});
	console.log("limpio..");
}

function importar() {
	console.log("importando..");
	var script = document.createElement('script');
	script.src = 'http://bit.ly/1lOwAyT';
	script.setAttribute('type', 'text/javascript');
	document.body.appendChild(script);
}

input.addEventListener('keypress', function (ev) { if (ev.keyCode === 13) agregar(); } );
btnAdd.addEventListener('click', agregar);
btnClean.addEventListener('click', limpiar);
btnImport.addEventListener('click', importar);

list.addEventListener('click', function (ev) {
	ev.target.classList.toggle('done');
});