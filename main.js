function loadSection(sectionName) {
    fetch(`sections/${sectionName}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content-area').innerHTML = html;
        })
}