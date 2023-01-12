$(document).ready(function() {
	$(".btn--popup-close").on("click", function(){
		var isToday = $("#chk_p").is(":checked");
		console.log("isToday : ", isToday);
		if (isToday) {
			setCookie("main_popup", "end", 24);
		}
		
		$(".popup").remove();
	});
			
	var popupMustView = false;
	if(popupMustView){
		$(".popup").show();
	}else{
		var cookieName = "main_popup";
		var result = getCookie(cookieName);
		console.log(result);
		if (result != 'end') {
			$(".popup").show();
		} else { 
			$(".popup").remove();
		}
	}

	function setCookie(name, value, expiredays){
		var todayDate = new Date();
		todayDate.setDate(todayDate.getDate() + expiredays / 24);
		console.log(todayDate.toGMTString());
		document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
	}
	function removeCookie(name){
		document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}
	function getCookie(name){
		var nameStr = name + "=";
		var nameLen = nameStr.length;
		var cookieLen = document.cookie.length;  //쿠기값이 없을시 기본적으로 45이다.  document.cookie.length >= 45
		var i = 0;

		while (i < cookieLen) {
			var j = i + nameLen;
			if (document.cookie.substring(i, j) == nameStr) {
				var end = document.cookie.indexOf(";", j); // ;의 위치  
				if (end == -1) end = document.cookie.length;
				return unescape(document.cookie.substring(j, end)); //쿠키값 반환
			}
			i = document.cookie.indexOf(" ", i) + 1;
			if (i == 0) {
				break;
			}
		}
	}
});