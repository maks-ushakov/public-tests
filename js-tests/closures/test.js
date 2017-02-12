describe('Closure and event', function () {
	var div = document.createElement('div');
	var event = new Event("click");
	var links;

	before(function () {
		// Create test fixture
		div.innerHTML = 'In my life, I used the following web search engines:<br/>' +
						'<a href="#">Yahoo!</a><br/>' +
						'<a href="#">AltaVista</a><br/>' +
						'<a href="#">Google</a><br/>';
		div.style.display = 'none';
		// insert fixture to main DOM
		document.body.insertBefore(div, document.body.children[0]);

		links = div.getElementsByTagName('a');

		registerHandlers(); // run suspect
	});

	it('All Links have property onClick', function () {
		for(var i = 0; i < links.length; i++) {
			assert.property(links[i], 'onclick');
		}
	});

	it('After click call alert', function () {
		var _savedAlert = window.alert;
		try {

			window.alert = sinon.spy();
			var spy = window.alert;
			links[2].dispatchEvent(event); // link with Google
			sinon.assert.called(spy);
		}

		finally { window.alert = _savedAlert; }
		});

	it('If any of links been clicked show its number', function () {
		var _savedAlert = window.alert;

		for( var i = 0; i < links.length; i++) {
			try {
				window.alert = sinon.spy();
				var spy = window.alert;

					links[i].dispatchEvent(event);
					assert.equal(spy.args[0], i, "Show wrong number");
				}

			finally { window.alert = _savedAlert; }
		}
	});

	it('Can works with 4 links', function () {
		//Add more link
		var link = document.createElement('a');
		link.setAttribute('href', '#');
		link.appendChild(document.createTextNode('Meta UA'));
		div.appendChild(link);

		registerHandlers(); //Update Handlers

		assert.property(links[3], 'onclick', "Last link does not have property onclick");

		var _savedAlert = window.alert;
		try {
			window.alert = sinon.spy();
			var spy = window.alert;
			links[3].dispatchEvent(event);
			assert.equal(spy.args[0], 3, "Show wrong number");
		}
		finally { window.alert = _savedAlert; }
	});
});
