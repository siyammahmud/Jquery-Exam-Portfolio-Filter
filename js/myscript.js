$(document).ready(function(){

	$("#one").click(function(){

		$("div").filter(".mobile").hide(2000);

	});

	$("#two").click(function(){

		$("div").filter(".web").hide(2000);
		$("div").filter(".mobile").show(2000);

	});

	$("#three").click(function(){

		$("div").filter(".web").show(2000);
		$("div").filter(".mobile").show(2000);
		

	});
});
