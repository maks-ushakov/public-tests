describe("Change data", function() {
	it("Two-digit month and day", function() {
    		assert.equal( formatDate('10/13/1982'), '19821013');
 	 });
	it("Two-digit month and day", function() {
    		assert.equal( formatDate('12/19/2017'), '20171219');
 	 });

  	it(" One-digit day", function() {
    		assert.equal( formatDate('12/6/2017'), '20171206' );
  	});

  	it("One-digit month", function() {
  		assert.equal(formatDate('2/14/2017'), '20170214' )
  	});

	it("One-digit month and day", function() {
  		assert.equal(formatDate('2/9/2017'), '20170209' )
  	});

});
