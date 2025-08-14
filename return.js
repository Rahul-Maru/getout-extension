const sleep = s => new Promise(r => setTimeout(r, 1000*s));
let timer;
let form;
let button;
let p;
let check;

clickable = false

async function loadtimer() {
	const url = new URL(document.URL)
	const dest = url.searchParams.get("src") || "nowhere...?"

	timer = document.getElementById("timer")
	button = document.getElementsByTagName("button")[0]
	p = document.getElementById("test")

	p.textContent = "came from: " + dest

	let t = Number(timer.textContent.slice(0, -1))
	while (t > 0) {
		await sleep(1)
		t--
		timer.textContent = t + "s"
	}

	form.setAttribute("action", dest)
	button.setAttribute("style", "background-color: green;")
	button.textContent = "Okay... Go Forth to Thy Own Peril"
	button.type = "submit"
	clickable = true
}

async function goback() {	
	// message the extension
    console.log("2")
	p.textContent = "miau"
	await sleep(2)

	// chrome.runtime.sendMessage({
	// 	action: "allowReturn", 
	// 	url: window.location.href
	// });
}

document.addEventListener('DOMContentLoaded', function() {
	form = document.getElementById("return")
	document.getElementById("return").addEventListener('submit', async function(e) {
		console.log("1")
		e.preventDefault(); // Stop the form from submitting immediately

		await goback(); // Do your stuff first
		console.log("3")
		
		this.submit()
		console.log("42")

	})
});