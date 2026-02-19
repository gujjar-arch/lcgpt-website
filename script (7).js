function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
document.querySelector("button").addEventListener("click", () => {
  alert("Welcome to LCGPT! Learning starts soon 🚀");
});
