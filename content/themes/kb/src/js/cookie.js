/**
*
* CookieJS
*
* Methods for creating/getting cookies
* see https://www.w3schools.com/js/js_cookies.asp
*
*/

// set cookie
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// get cookie
function getCookie(cname) {
	var name = cname + "=";
	var decodeCookie = decodeURIComponent(document.cookie);
	var ca = decodeCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}

	return null;
}

// erase cookie
function eraseCookie(name) {
    setCookie(name,"",-1);
}