const land = document.getElementById("land");
land.innerHTML = land.content.replace(/\$/g, "<span>$$</span>")