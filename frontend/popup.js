const button = document.getElementById("summarizeBtn");
const result = document.getElementById("result");

button.addEventListener("click", async () => {
    try {
        const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true
        });

        console.log("TAB:", tab);

        const response = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => document.body.innerText
        });

        console.log(response);

        result.innerHTML = response[0].result.substring(0, 1000);

    } catch (err) {
        console.error(err);
        result.innerHTML = `
            <pre>${err.stack || err.message || JSON.stringify(err)}</pre>
        `;
    }
});