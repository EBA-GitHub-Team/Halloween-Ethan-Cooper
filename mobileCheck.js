let agent = navigator.userAgent;
const mobile = [
	"Android",
	"iPhone",
	"iPad",
]

let rickroll = false;
mobile.forEach((item) => { if (agent.includes(item)) { rickroll = true; } });

if (rickroll) { document.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}