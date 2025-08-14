function goback() {
	const form = document.getElementById("return")
	
	const url = new URL(document.URL)
	dest = url.searchParams.get("src")

	const p = document.getElementById("test")
	p.textContent = dest

	form.setAttribute("action", dest)
}