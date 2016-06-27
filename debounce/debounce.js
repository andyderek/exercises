var debounce = function(funk, time){
	var stamp = new Date().getTime();
	while((new Date().getTime()) - stamp !== time){
		var now = new Date().getTime();
	}
	funk();
}


module.exports = debounce
