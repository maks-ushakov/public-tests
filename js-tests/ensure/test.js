describe('Ensure', function () {
	describe('return boolean arguments', function () {

		it('return True if value = True', function () {
			expect(ensure(true)).to.be.true;
		});

		it('return False if value = False', function () {
			expect(ensure(false)).to.be.false;
		});
	});


	describe('return given value', function () {
		var valuesArr = [ 
			1, // Number type
			NaN, 
			Infinity,
			null, // null type
			'String', // string type
			true, // boolean type
			{x: 1, y: 0}, // object type
			[1, 2, 3] // Array type
		];
		for(var i = 0; i < valuesArr.length; i++) {
			var item = valuesArr[i];
			it('should return ' + typeof(item) + ' type, value = ' + item, function () {
				expect(ensure(item)).to.equal(item);
			});
		}
	});

	describe('Errors', function () {
		it('Can Throw Error', function () {
			expect(ensure).to.throw(Error);
		});

		it('Throw Error if no arguments', function () {
			expect(function() { ensure(); }).throw( Error );
		});

		it('Throw Error for undefined value', function () {
			var tmp;
			expect(function () { ensure(tmp); }).throw( Error );
		});

		it('Do not throw Error if any difined arguments present', function () {
			expect(function() { ensure(true); }).not.throw( Error);
		});
	});

});
