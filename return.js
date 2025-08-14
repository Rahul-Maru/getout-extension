const sleep = s => new Promise(r => setTimeout(r, 1000*s));

async function goback() {
	const timer = document.getElementById("timer")
	const form = document.getElementById("return")
	const button = document.getElementsByTagName("button")[0]
	const p = document.getElementById("test")

	const url = new URL(document.URL)
	const dest = url.searchParams.get("src") || "nowhere...?"
	p.textContent = "came from: " + dest

	let t = Number(timer.textContent.slice(0, -1))
	while (t > 0) {
		await sleep(1)
		t--
		timer.textContent = t + "s"
	}

	button.setAttribute("style", "background-color: green;")
	form.setAttribute("action", dest)
	button.type = "submit"
}