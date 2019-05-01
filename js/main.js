
MathJax.Hub.Config({
			config: ["MMLorHTML.js"],
  			jax: [
					"input/TeX",
					"input/MathML",
					"output/HTML-CSS",
					"output/NativeMML",
					"output/PreviewHTML"],
  			extensions: [
					"tex2jax.js",
					"mml2jax.js",
					"MathMenu.js",
					"MathZoom.js",
					"fast-preview.js",
					"AssistiveMML.js",
					"a11y/accessibility-menu.js"],

			tex2jax: {
				inlineMath: [['$','$']],
				displayMath: [['$$','$$']],
				processEscapes: true,
				processEnvironments: true,
				skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
				ignoreClass: "gist-file|shortcode|ignore-mathjax",
				TeX: {
					equationNumbers: { autoNumber: "AMS" },
					extensions: ["AMSmath.js", "AMSsymbols.js"] }
			}
		});
MathJax.Hub.Configured()

function emitte_code_info() {
	code_blocks = document.getElementsByClassName("highlight")
	for( let i=0; i< code_blocks.length; i++){
		code_block = code_blocks[i]
		codes = code_block.getElementsByTagName("code")
		info = codes[0].attributes["data-lang"].value
		div = document.createElement("div")
		div.className = "code-info"
		div.innerHTML = info
		code_block.appendChild(div)
	}
}

function closeSidebar(){
	ele = document.getElementById("app-sidebar")
	ele.style.display = "none"
}

function openSidebar(){
	ele = document.getElementById("app-sidebar")
	ele.style.display = "block"
}

function sendMail(){
	window.location.href = "mailto:alslalsl356@gmail.com";
}

function openGithub(){
	window.open("https://github.com/ghfkddorl")
}

function onload(){
	emitte_code_info();
}
