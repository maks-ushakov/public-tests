function removeProperty(obj, prop) {
	if(typeof(obj) === 'object' &&
	   typeof(prop) !== 'undefined' &&
			(prop in obj)) {
		delete obj[prop];
		return true;
	}
  return false;
}
