document.getElementById("main-btn").onclick = function () {
	document.getElementById("choice").scrollIntoView({behavior: "smooth"});
};

let links = document.querySelectorAll(".menu__item > a");
for (let i = 0; i < links.length; i++) {
	links[i].onclick = function () {
		document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
	};
}

let buttons = document.getElementsByClassName("choice__button");
for (let i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function () {
		document.getElementById("order").scrollIntoView({behavior: "smooth"});
	};
}

let burger = document.getElementById("burger");
let infoName = document.getElementById("infoName");
let phone = document.getElementById("phone");
document.getElementById("form-order__button").onclick = function () {
	let hasError = false;

	[burger, infoName, phone].forEach((item) => {
		if (!item.value) {
			item.parentElement.style.background = "red";
			hasError = true;
		} else {
			item.parentElement.style.background = "";
		}
	});

	if (!hasError) {
		[burger, infoName, phone].forEach((item) => {
			item.value = "";
		});
		alert("Спасибо за заказ! Мы вам перезвоним!");
	}
};

let prices = document.getElementsByClassName("info-item-choice__value");
document.getElementById("change-currency").onclick = function (e) {
	let currentCurrency = e.target.innerText;

	let newCurrency = "$";
	let coefficient = 1;

	if (currentCurrency === "$") {
		newCurrency = "₴";
		coefficient = 36,84;
	} else if (currentCurrency === "₴") {
		newCurrency = "AED";
		coefficient = 3,67;
	} else if (currentCurrency === "AED") {
		newCurrency = "€";
		coefficient = 0.9;
	} else if (currentCurrency === "€") {
		newCurrency = "¥";
		coefficient = 6.9;
	} else if (currentCurrency === "¥") {
		newCurrency = "BYN";
		coefficient = 3;
	}
	e.target.innerText = newCurrency;

	for (let i = 0; i < prices.length; i++) {
		prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
	}
};
