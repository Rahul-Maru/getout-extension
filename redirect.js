// const fs = require('fs');

// var loc = fs.realpathSync("./")
// var dir = loc.substring(0, loc.lastIndexOf('/'));

const PTH = "https://useless-machine.js.org/"

function redirect() {
	console.log("Redirecting to:", PTH)
	location.replace(PTH)
}

redirect()
