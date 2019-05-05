Vue.filter('time', function (value) {
	if (!value) return;
	var d = new Date(value);
	var year = d.getFullYear();
	var month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1);
	var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
	var hour = d.getHours() < 10 ? '0' + d.getHours() : '' + d.getHours();
	var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : '' + d.getMinutes();
	var seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : '' + d.getSeconds();
	return year + '-' + month + '-' + day + " " + hour + ":" + minutes + ":" + seconds;
});
Vue.filter('msgTime', function (value) {
	if (!value) return;
	var d = new Date(value);
	var year = d.getFullYear();
	var month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1);
	var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
	var hour = d.getHours() < 10 ? '0' + d.getHours() : '' + d.getHours();
	var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : '' + d.getMinutes();
	var seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : '' + d.getSeconds();
	return year + '-' + month + '-' + day + " " + hour + ":" + minutes;
});
Vue.filter('mytime', function (value) {
	if (!value) return;
	var d = new Date(value);
	var year = d.getFullYear();
	var month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1);
	var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
	var hour = d.getHours() < 10 ? '0' + d.getHours() : '' + d.getHours();
	var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : '' + d.getMinutes();
	var seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : '' + d.getSeconds();
	return year + '.' + month + '.' + day ;
});

Vue.filter('date', function (value) {
	if (!value) return;
	var d = new Date(value);
	var year = d.getFullYear();
	var month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1);
	var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
	var hour = d.getHours() < 10 ? '0' + d.getHours() : '' + d.getHours();
	var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : '' + d.getMinutes();
	var seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : '' + d.getSeconds();
	return year + '-' + month + '-' + day;
});

// 处理货币
Vue.filter('currency', function (value) {
	if (value != 0) {
		if (!value) return;
	}
	var num2 = value.toFixed(3);
	num2 = num2.substring(0, num2.lastIndexOf('.') + 3);
	return num2;
});

Vue.filter('dollars', function (value) {
	if (value != 0) {
		if (!value) return;
	}
	var num2 = value.toFixed(3);
	num2 = num2.substring(0, num2.lastIndexOf('.') + 3);
	return "$" + num2;
});
