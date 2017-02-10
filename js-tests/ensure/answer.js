function ensure(value) {
	if(typeof(value) === 'undefined') {
		throw new TypeError('Empty call or undefined variable. ' + value);
	}
  return value;
}

