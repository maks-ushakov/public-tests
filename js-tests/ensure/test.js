describe('Ensure', function () {
	it('return True if value = True', function () {
		expect(ensure(true)).to.be.true;
	});

	it('return False if value = False', function () {
		expect(ensure(false)).to.be.false;
	});

	it('Throw Error if no arguments', function () {
		expect(ensure()).to.throw(Error);
	});

	it('Throw Error for undefined value', function () {
		var tmp;
		expect(ensure(tmp)).to.throw(Error);
	});
});
