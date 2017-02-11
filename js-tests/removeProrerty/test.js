describe('Remove property', function () {
	var testObject = {
		name: 'Test'
	}
	beforeEach(function () {
		testObject.toRemove = true;
	});

	describe('If the object obj has a property prop', function () {
		it('the function removes the property', function () {
			removeProperty(testObject, 'toRemove');
			expect(testObject).to.not.have.property('toRemove');
		});

		it('the function returns true', function () {
			expect(removeProperty(testObject, 'toRemove')).to.be.true;
		});
	});
	describe('Other cases, return False', function () {
		it('If the object obj does not have a property prop', function () {
			expect(removeProperty(testObject, 'toDelete')).to.be.false;
		});

		it('If the function takes only the object', function () {
			expect(removeProperty(testObject)).to.be.false;
		});

		it('If the function does not take any arguments', function () {
			expect(removeProperty()).to.be.false;
		});

		describe('if the first argunent is not an object', function () {
			var argArr = [
			100, //number
			NaN,
			null,
			Infinity,
			true, // boolean
			'"String"' // String type
			];
			for (var i = 0; i < argArr.length; i++) {
				var item = argArr[i];
				it('For the ' + typeof(item) +' of such as ' + item + ', should retun False', function () { 
					expect(removeProperty(item)).to.be.false;
				});
			}
		});

		it('If the function takes only the null, it returns false', function () {
			expect(removeProperty(null)).to.be.false;
		});
	});
});
