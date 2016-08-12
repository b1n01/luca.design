/*JavaScript mouse hover parallax*/

$(document).ready(function(){

	/*Call to parallax function for each layer*/
	$("#parallax1").mousemove(function(e){
		parallax(this, e, 25);
	});

	$("#parallax2").mousemove(function(e){
		parallax(this, e, 75);
	});

	$("#parallax3").mousemove(function(e){
		parallax(this, e, 125);
	});

	/*Parallax function*/
	function parallax(obj, e, factor){
		var width = factor / $(obj).width();
		var height = factor / $(obj).height();
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2) - $(window).scrollTop();
		var newvalueX = width * pageX * -1 - 25;
		var newvalueY = height * pageY * -1 - 25;
		$(obj).css("background-position", newvalueX + "px " + newvalueY + "px");
	}
});