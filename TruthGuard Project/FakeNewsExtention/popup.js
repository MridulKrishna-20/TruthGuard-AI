document.getElementById('scanBtn').addEventListener('click', async () => {
  const resultDiv = document.getElementById('result');
  const verdictDiv = document.getElementById('verdict');
  const confidenceDiv = document.getElementById('confidence');
  const snippetDiv = document.getElementById('snippet');
  
  verdictDiv.innerText = "🧠 AI is analyzing text...";
  resultDiv.style.display = "block";
  resultDiv.className = "";

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => document.body.innerText
  }, async (results) => {
    if (!results || !results[0]) {
      verdictDiv.innerText = "❌ Failed to read page text.";
      return;
    }

    const pageText = results[0].result;

    try {
      const response = await fetch('https://calm-toes-cough.loca.lt/analyze', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Bypass-Tunnel-Reminder': 'true'
        },
        body: JSON.stringify({ text: pageText, url: tab.url })
      });

      const data = await response.json();

      if (data.status === "success") {
        if (data.verdict === "FAKE") {
          verdictDiv.innerText = "🔴 ALERT: LIKELY FAKE / SATIRE";
          resultDiv.className = "FAKE";
        } else {
          verdictDiv.innerText = "🟢 CREDIBLE: LIKELY FACTUAL";
          resultDiv.className = "REAL";
        }
        confidenceDiv.innerText = `Confidence: ${data.confidence}% (via ${data.source_method})`;
        snippetDiv.innerText = `Analyzed: "${data.snippet}"`;
      } else {
        verdictDiv.innerText = "❌ Server error during analysis.";
      }
    } catch (err) {
      verdictDiv.innerText = "❌ Cannot connect to AI backend. Make sure Colab is running!";
    }
  });
});