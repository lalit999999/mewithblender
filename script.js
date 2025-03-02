function set() {
    document.getElementById("fa-solid").addEventListener("click", () => {
        console.log("adding event");
        let a = document.getElementById("hide");
        if (a.style.display == 'none') {
            a.style.display = 'block';
        }
        else {
            a.style.display = 'none';
        }
    });
}