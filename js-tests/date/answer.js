function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
	var tmp = userDate.split('/');
	var result = tmp[2];
	tmp[0] = 0 + tmp[0];
	tmp[1] = 0 + tmp[1];
	result += tmp[0].slice(-2) + tmp[1].slice(-2);
	return result;
}
