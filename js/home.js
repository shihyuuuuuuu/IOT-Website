var usr = prompt("Please enter username:")
while(usr != "0") {
    usr = prompt("Error, please enter valid username:")
}

var pwd = prompt("Please enter password:")
while(pwd != "0") {
    pwd = prompt("Error, please enter valid password:")
}

function connect(){
	var client  = mqtt.connect({
			host: '140.116.82.42',
			port: 9001,
			username: 'csie108fyp',
			password: '284vm,61j4'
		});
	var temp = document.getElementById("temp");

	/*client.on('connect', function () {
	client.subscribe('mqtt/data');
	client.publish('mqtt/data', '26.4℃');
	});*/
	
	client.subscribe('mqtt/data');
	client.publish('mqtt/data', '26.4℃');
 
	client.on('message', function (topic, message) {
		document.getElementById("temp").innerHTML = message.toString();
		console.log(message.toString());
		client.end();
	});
}