'use strict';
window.onload = function() {
	let content = document.getElementById('content');
	let wrongSizedBlocks = content.children;
	for (let i = 0; i < wrongSizedBlocks.length; i++) {
		wrongSizedBlocks[i].style.height = (wrongSizedBlocks[i].clientWidth * 0.56) + 'px';
	}
}
window.onresize = function() {
	let content = document.getElementById('content');
	let wrongSizedBlocks = content.children;
	for (let i = 0; i < wrongSizedBlocks.length; i++) {
		wrongSizedBlocks[i].style.height = (wrongSizedBlocks[i].clientWidth * 0.56) + 'px';
	}
}