(function() {
	var blade = document.getElementById("heliBlade");

	var i = 0;

	var spin = function() {
		transfromString = "perspective(400px) rotateX(70deg) rotateZ("+i+"deg)"; 
		blade.style.webkitTransform = transfromString;
		blade.style.MozTransform = transfromString;
		blade.style.msTransform = transfromString;
		blade.style.OTransform = transfromString;
		blade.style.transform = transfromString;
		i+=4;

		transform= getComputedStyle(blade).getPropertyValue('transform');

		blade.setAttribute('transform', transform);

		if(i >= 360) {
			i-=360;
		}

		requestAnimationFrame(spin);
	};

	requestAnimationFrame(spin);
})();