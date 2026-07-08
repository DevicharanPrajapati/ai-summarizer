console.log("✅ Content Script Loaded");
function getPageText() {
    return document.body.innerText;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.action === "GET_PAGE_TEXT") {

        sendResponse({
            text: getPageText()
        });

    }

    return true;
});