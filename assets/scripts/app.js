const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Bootstrap",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "ReactJs",
				weight: 14
			},{
				text: "Styled-Components",
				weight: 7
			}, {
				text: "javascript",
				weight: 3
			}, {
				text: "NodeJS",
				weight: 7
			}, {
				text: "Firebase",
				weight: 10
			}, {
				text: "Material-UI",
				weight: 9
			}, {
				text: "WordPress",
				weight: 15
			}, {
				text: "Redux",
				weight: 7
			},{
				text: "TailwindCSS",
				weight: 10
			},
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a MERN-Stack Web Developer.", "love everything about code.", "enjoy taking new challenges.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
