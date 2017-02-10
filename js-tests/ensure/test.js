describe('Ensure', function () {
	it('return True if value = True', function () {
		expect(ensure(true)).to.be.true;
	});

	it('return False if value = False', function () {
		expect(ensure(false)).to.be.false;
	});

	describe('Errors', function () {
		it('Can Throw Error', function () {
			expect(ensure).to.throw(Error);
		});

		it('Throw Error if no arguments', function () {
			assert.throws(function() { ensure(); }, Error);
		});

		it('Throw Error for undefined value', function () {
			var tmp;
			assert.throws(function () { ensure(tmp); }, Error );
		});
	});

});
