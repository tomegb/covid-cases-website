document.onload = new (function () {
	fetch('https://api.corona-zahlen.org/germany')
		.then((response) => response.json())
		.then((data) => {
			// eslint-disable-next-line no-console
			console.log(data.url);
		})
		.catch((error) => {
			// eslint-disable-next-line no-console
			console.log('An error has occured: ' + error);
		});
})();