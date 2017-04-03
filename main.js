$(document).ready(function () {
	$("#submit").on("click", function (e) {
		e.preventDefault();

		var operation = $("input[name='operation']:checked").val();
		var number1 = parseFloat($("#shower").val());
		var number2 = parseFloat($("#toilet").val());
		var number3 = parseFloat($("#teeth").val());
		var number4 = parseFloat($("#hands").val());
		var number5 = parseFloat($("#dishes").val());
		var number6 = parseFloat($("#dishwasher").val());
		var number7 = parseFloat($("#cooking").val());
		var number8 = parseFloat($("#clothes").val());
		var number9 = parseFloat($("#car").val());
		var number10 = parseFloat($("#lawn").val());
		var number11 = parseFloat($("#cups").val());

		if (operation != "add") {
			console.log("You are NOT performing addition");
		} else {
			console.log("Hey, we're adding");
		}

		if (operation == "add") {
			var sum = addition(number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11)
		} 

		$("#sum").val(sum);
	});
});

function addition(shower, toilet, teeth, hands, dishes, dishwasher, cooking, clothes, car, lawn, cups) {
	var sum = ((shower * 21) + (toilet * 3.5) + (teeth * .5) + (hands * 2) + (dishes * 4.4) + (dishwasher * 10) + (cooking * 2) + (clothes * 40) + (car * 32) + (lawn * 32) + (cups * .1)) * 4;
	return sum;
}
