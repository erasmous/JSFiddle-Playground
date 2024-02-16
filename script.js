document.getElementById("runButton").addEventListener("click", function () {
    var code = document.getElementById("code").value;
    var iframe = document.getElementById("resultFrame");
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Clear previous content
    iframeDoc.body.innerHTML = "";

    // Include Tailwind CSS CDN link in the iframe
    var tailwindLink = document.createElement("link");
    tailwindLink.href =
        "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
    tailwindLink.rel = "stylesheet";
    iframeDoc.head.appendChild(tailwindLink);

    // Execute the code in the iframe
    iframeDoc.open();
    iframeDoc.write(code);
    iframeDoc.close();
});

document.getElementById("resetButton").addEventListener("click", function () {
    // Clear code textarea and iframe content
    document.getElementById("code").value = "";
    var iframe = document.getElementById("resultFrame");
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.body.innerHTML = "";
});
