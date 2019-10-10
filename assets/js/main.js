//https://isabelcastillo.com/toggle-showhide-multiple-elements-with-pure-javascript
function toggleDocs(event) {

    if (event.target && event.target.className == 'clickable-heading') {

        var next = event.target.nextElementSibling;


        if (next.style.display == "none") {
            next.style.display = "block";

        } else {
            next.style.display = "none";
        }
    }
}

document.addEventListener('click', toggleDocs, true);
