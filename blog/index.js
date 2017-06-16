/**
 * Created by Armaldio on 15/06/2017.
 */

class Page {
	constructor (url, name, image, category) {
		this.url      = url;
		this.name     = name;
		this.category = category;
	}
}

let struct = [
	new Page("offline-first.html", "Offline first !", "Web"),
	new Page("offline-first.html", "Offline first 2 !", "Web"),
	new Page("offline-first.html", "Offline first 3 !", "Web"),
	new Page("offline-first.html", "Offline first 4 !", "Web"),
	new Page("offline-first.html", "Offline first 5 !", "Web")
];

$(document).ready(() => {

	struct.forEach(function (elem) {
		$("#grid").append(
			`
		<div class="four wide column grow" onclick="document.location.replace('/${elem.url}')">
        	<div class="ui center aligned segment">
        	<div class="ui fluid rounded image">
      			<div class="ui blue ribbon label">
        			<i class="newspaper icon"></i> ${elem.name}
     			 </div>
     			 <img src="${elem.url.replace('.html', '')}.png">
   			 </div>				
        	</div>
        </div>
		`
		);
		console.log(elem);
	});

});
