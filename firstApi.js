function FilmManager () {
	this.getAll = function () {
		return JSON.parse(window.localStorage.getItem('films')) || [];
	};
	this.add = function (film) {
		var films = this.getAll();
		films.push(film);
		window.localStorage.setItem('films', JSON.stringify(films));	
	};
	this.getByName = function (name) {
		var films = this.getAll();
		for(var i = 0; i < films.length; i++) {
			var film = films[i];
			if (film.name === name) {
				return film;
			}
		}
	};
	this.remove = function (name) {
		var films = this.getAll();
		for(var i = 0; i < films.length; i++) {
			var film = films[i];
			if (film.name === name) {
				films.splice(i, 1);
				i--;
				console.log("elimino");
			}
		}
		window.localStorage.setItem('films', JSON.stringify(films));
	};
}