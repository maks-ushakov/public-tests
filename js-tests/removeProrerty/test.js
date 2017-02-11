describe('Remove property', function () {
	var testObject = {
		name: 'Test'
	}
	beforeEach(function () {
		testObject.toRemove = true;
	});

	it('If the object obj has a property prop, the function removes the property', function () {
		removeProperty(testObject, 'toRemove');
		expect(testObject).to.not.have.property('toRemove');
	});

	it('If the object obj has a property prop, the function returns true', function () {
		expect(removeProperty(testObject, 'toRemove')).to.be.true;
	});

	it('If the object obj does not have a property prop, the function returns false', function () {
		expect(removeProperty(testObject, 'toDelete')).to.be.false;
	});

	it('If the function taks only the object, it returns false', function () {
		expect(removeProperty(testObject)).to.be.false;
	});

	it('If the function does not take any arguments, it returns false', function () {
		expect(removeProperty()).to.be.false;
	});
});
