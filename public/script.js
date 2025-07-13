document.getElementById('getSessionBtn').addEventListener('click', async () => {
  const responseText = document.getElementById('responseText');
  responseText.textContent = "🕒 Creating your Royal Session...";

  try {
    const res = await fetch('/pair');
    const text = await res.text();
    responseText.textContent = text;
  } catch (error) {
    responseText.textContent = "❌ Error connecting to the server.";
  }
});
