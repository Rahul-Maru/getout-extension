// const fs = require('fs');

// var loc = fs.realpathSync("./")
// var dir = loc.substring(0, loc.lastIndexOf('/'));

const PTH = "https://rahul-maru.github.io/getout-extension/"

function redirect() {
	console.log("Redirecting to:", PTH)
	location.replace(PTH)
}

redirect()
