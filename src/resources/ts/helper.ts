{
	// better touch detection
	biotope.configuration.set('biotope.touch', (Modernizr.touchevents || 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0));
}
