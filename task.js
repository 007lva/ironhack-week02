/*
self.onmessage = function (oEvent) {
	console.log(self.localStorage);
	var action = oEvent.data.action;
	var film = oEvent.data.film;
	var filmManager = new FilmManager();
	if (action === "save") {
		filmManager.add(film);
	}
	alert("pelicula guardada");
	console.log(JSON.stringify(filmManager.getAll()));
	self.postMessage("Hi " + oEvent.data);
}
*/

self.onmessage = function (oEvent) {
	var action = oEvent.data.action;
	if (oEvent.data.action === "save") console.log("apunto de guardar");
	self.postMessage(oEvent.data);
}