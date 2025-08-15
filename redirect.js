const sleep = s => new Promise(r => setTimeout(r, 1000*s));
const PTH = chrome.runtime.getURL("index.html")

async function redirect() {
	console.log("=== REDIRECT SCRIPT RUNNING ===")
	loc = location.href
	console.log("Current URL:", loc)
	path = PTH + "?src=" + loc
	console.log("Redirecting to:", path)
	console.log("Script loaded at:", new Date().toISOString())

	await sleep(2)

	try {
		location.replace(path)
		console.log("Redirect command executed")
	} catch (error) {
		console.error("Redirect failed:", error)
	}
}

console.log("redirect.js loaded on:", location.href)
redirect()

