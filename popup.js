document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById("summarise");
    btn.addEventListener("click", function() {
        const inputText = document.getElementById("input-text").value.trim();

        if (inputText !== "") {
            btn.disabled = true;
            btn.innerHTML = "Summarising...";
            
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "https://ijaytelgote.pythonanywhere.com/summarize", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = function() {
                const response = JSON.parse(xhr.responseText);
                const summary = response.summary;
                const outputArea = document.getElementById("output-area");
                const outputText = document.getElementById("output");
                outputText.textContent = summary;
                outputArea.style.display = "block"; // Show output area
                btn.disabled = false;
                btn.innerHTML = "Summarise";
            };
            const data = JSON.stringify({ text: inputText });
            xhr.send(data);
        } else {
            alert("Please enter some text to summarize.");
        }
    });
});
