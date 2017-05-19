function Gauge(el) {
	var element, needle, value = 0.5, prop;
	var setElement = function(el) {
		element = el;
		needle = element.querySelector(".gauge--needle");
	};
	var setValue = function(x) {
		value = x;
		var turns = -0.5 + (x * 0.5);
		needle.style[prop] = "rotate(" + turns + "turn)";
	};
	function exports() { };
	exports.element = function(el) {
		if (!arguments.length) { return element; }
		setElement(el);
		return this;
	};
	exports.value = function(x) {
		if (!arguments.length) { return value; }
		setValue(x);
		return this;
	};
	var body = document.getElementsByTagName("body")[0];
	["webkitTransform", "mozTransform", "msTransform", "oTransform", "transform"].
		forEach(function(p) {
			if (typeof body.style[p] !== "undefined") { prop = p; }
		}
	);
	if (arguments.length) {
		setElement(el);
	}
	return exports;
};

function pizzaYEmpanadas(){
	var rta = document.createElement("h3");
	rta.textContent = "¡Pizzas y Empanadas!";
	
	var subRta = document.createElement("h4");
	subRta.textContent = "Somos inclusivos";
	
	document.body.appendChild(rta);
	document.body.appendChild(subRta);
};

var gauge = new Gauge(document.getElementById("gauge"));

gauge.value(0.5);
setTimeout(function(){
	gauge.value(Math.random());
	setTimeout(function(){
		gauge.value(Math.random());
		setTimeout(function(){
			gauge.value(Math.random());
			setTimeout(function(){
				gauge.value(Math.random());
				setTimeout(function(){
					gauge.value(Math.random());
					setTimeout(function(){
						gauge.value(Math.random());
						setTimeout(function(){
							gauge.value(0.5);
							pizzaYEmpanadas();
						}, 1000);
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);					
	}, 1000);
}, 1500);
