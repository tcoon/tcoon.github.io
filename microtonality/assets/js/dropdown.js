// Derived from w3schools example: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function dropdown() {
	var id = document.getElementById("navlist");
	if (id.className === "nav") {
		id.className += " responsive";
	} else {
		id.className = "nav";
	}
}