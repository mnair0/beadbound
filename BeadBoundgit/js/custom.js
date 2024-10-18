var cartArray = [];
$("#numberOfItems").html(cartArray.length);
var loadCart = function() {
	var loadItem = function() {
		var tableData = "";
		var total = 0;
		for (var i = 0; i < cartArray.length; i++) {
			var itemTotal = parseFloat(cartArray[i]["price"].substring(1)) * parseFloat(cartArray[i]["quantity"]);
			total += itemTotal;
			tableData += '<tr class="rowClass"><td class="product-thumbnail"><img src=' + cartArray[i]["img"] + ' alt="Image" class="img-fluid"></td><td class="product-name"><h2 class="h5 text-black">' + cartArray[i]["name"] + '</h2></td><td>' + cartArray[i]["price"] + '</td><td>' + cartArray[i]["quantity"] + '</td><td>$' + itemTotal + '</td><td><button class="removeProduct btn btn-black btn-sm">X</button></td></tr>'
		}
		table.html(tableData);
		$('#subTotal').html("$" + total);
		$('#total').html("$" + total);
	}
	var table = $("#cartTable");
	if (table != null) {
		cartArray = JSON.parse(sessionStorage.getItem('cartArray'));
		loadItem();
	}
	$('#cartTable').on('click', '.removeProduct', function() {
		var row = $(this).parent('td').parent('tr.rowClass');
		cartArray.splice(row.index(), 1);
		alert(JSON.stringify(cartArray));
		row.remove();
		loadItem();
	});



	/*	


<div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;"><div class="input-group-prepend"><button class="btn btn-outline-black decrease" type="button">&minus;</button></div><input type="text" class="form-control text-center quantity-amount" value="'+cartArray[i]["quantity"]+'" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"><div class="input-group-append"><button class="btn btn-outline-black increase" type="button">&plus;</button></div></div>


	
	
	
	<tr>
			<td class="product-thumbnail">
				<img src="images/product-2.png" alt="Image" class="img-fluid">
			</td>
			<td class="product-name">
				<h2 class="h5 text-black">Product 2</h2>
			</td>
			<td>$49.00</td>
			<td>
				<div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
					<div class="input-group-prepend">
						<button class="btn btn-outline-black decrease" type="button">&minus;</button>
					</div>
					<input type="text" class="form-control text-center quantity-amount" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
					<div class="input-group-append">
						<button class="btn btn-outline-black increase" type="button">&plus;</button>
					</div>
				</div>

			</td>
			<td>$49.00</td>
			<td><a href="#" class="btn btn-black btn-sm">X</a></td>
		</tr>*/
};
(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();


	//sitePlusMinus();



})()

var sitePlusMinus = function() {

	var value,
		quantity = document.getElementsByClassName('quantity-container');

	function createBindings(quantityContainer) {
		var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
		var increase = quantityContainer.getElementsByClassName('increase')[0];
		var decrease = quantityContainer.getElementsByClassName('decrease')[0];
		increase.addEventListener('click', function(e) { increaseValue(e, quantityAmount); });
		decrease.addEventListener('click', function(e) { decreaseValue(e, quantityAmount); });
	}

	function init() {
		for (var i = 0; i < quantity.length; i++) {
			createBindings(quantity[i]);
		}
	};

	function increaseValue(event, quantityAmount) {
		value = parseInt(quantityAmount.value, 10);

		console.log(quantityAmount, quantityAmount.value);

		value = isNaN(value) ? 0 : value;
		value++;
		quantityAmount.value = value;
	}

	function decreaseValue(event, quantityAmount) {
		value = parseInt(quantityAmount.value, 10);

		value = isNaN(value) ? 0 : value;
		if (value > 0) value--;

		quantityAmount.value = value;
	}

	init();

};

sitePlusMinus();
var changeToPlusMinus = function() {
	//alert("Click");
	document.getElementById('icon-cross1').innerHTML = '<div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;"><div class="input-group-prepend"><button class="btn btn-outline-black decrease" type="button">&minus;</button></div><input type="text" class="form-control text-center quantity-amount" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"><div class="input-group-append"><button class="btn btn-outline-black increase" type="button">&plus;</button></div></div>';
}

var addToCart = function(obj) {
	$("#numberOfItems").html(cartArray.length);
	//var count = parseInt(document.getElementById("numberOfItems").innerHTML);
	//count++;
	//document.getElementById("numberOfItems").innerHTML = count;
	var img = $(obj).parent().parent().parent().parent().children('img').attr('src');
	var name = $(obj).parent().parent().parent().parent().children('h3').text();
	var price = $(obj).parent().parent().parent().parent().children('strong').text();
	var quantity = $(obj).parent().parent().children('input').val();
	var cartObj = { "img": img, "name": name, "price": price, "quantity": quantity };
	cartArray.push(cartObj);
	sessionStorage.setItem('cartArray', JSON.stringify(cartArray));
}

var sendMail = function(){
	alert("Sending mail");
	const mailAdress = "thoufeeqmf@gmail.com";
	const ccRecipients =  "thoufeeqmf@gmail.com"
	const subject = encodeURIComponent("This is my subject")
	const body = encodeURIComponent("Order details")
	const  link= `mailto:${mailAdress}?cc=${ccRecipients}&subject=${subject}&body=${body}`
	window.location.href = link;
	alert("Sent mail");
}


