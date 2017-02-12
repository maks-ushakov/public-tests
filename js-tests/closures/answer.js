function registerHandlers() {
	var as = document.getElementsByTagName('a');
		for (var i = 0; i < as.length; i++) {
			//Since the variable is changed by the time the event click come,
			//let's keep it as a property
			as[i].index = i;
			as[i].onclick = function() {
			// Then use added property 
			alert(this.index);
			return false;
		}
	}
}
