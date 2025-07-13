// public/script.js
document.getElementById("sessionForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const number = document.getElementById("number").value;
  const res = await fetch("/start-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ number }),
  });
  const data = await res.json();
  document.getElementById("qr").innerHTML = `<img src="${data.qr}" width="300"/>`;
});
