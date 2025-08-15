

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
	const action = message.action
	console.log("message recieved: " + action)
	if (action === "UNBLOCK") {
		try {
			const response = message.url
			console.log("message content: " + response)
		} catch (error) {
			console.error("Failed to fetch:", error)
		}
	}

	return true
})