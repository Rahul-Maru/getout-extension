const sleep = s => new Promise(r => setTimeout(r, 1000*s));
let timer;
let form;
let button;
let p;
let check;
let dest;

clickable = false

async function load() {
	const url = new URL(document.URL)
	dest = url.searchParams.get("src") || "nowhere...?"

	timer = document.getElementById("timer")
	button = document.getElementsByTagName("button")[0]
	p = document.getElementById("srctxt")
	form = document.getElementById("return")
	quote = document.getElementById("quote")

	p.textContent = "came from: " + dest
	quote.textContent = await getMotivationalQuote()

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

	await chrome.runtime.sendMessage ({
		action: "UNBLOCK", 
		url: dest
	});
}

document.addEventListener('DOMContentLoaded', function() {
	load()

	document.getElementById("return").addEventListener('submit', async function(e) {
		console.log("1")
		e.preventDefault(); 

		await goback(); 
		console.log("3")
		
		this.submit()
		console.log("42")

	})
});

async function getMotivationalQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random?tags=motivational|inspirational|success');
        const data = await response.json();
        return `"${data.content}" - ${data.author}`;
        
    } catch (error) {
        console.error('Quote fetch failed:', error);
        // Fallback quotes
        const fallbackQuotes = [
            '"The way to get started is to quit talking and begin doing." - Walt Disney',
            '"Innovation distinguishes between a leader and a follower." - Steve Jobs',
            '"Your time is limited, so don\'t waste it living someone else\'s life." - Steve Jobs',
            '"Life is what happens to you while you\'re busy making other plans." - John Lennon'
        ];
        return fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    }
}