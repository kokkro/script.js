const cb = document.querySelectorAll('input[type="checkbox"]');
const counter = document.getElementById("counter");

function update() {

    const completed = document.querySelectorAll('input[type="checkbox"]:checked').length;
    const unchecked = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length;
    const total = cb.length;
    counter.textContent = completed + " / " + total + " completed tasks";

    if (completed === total){
        counter.style.color = "green";
    } else {
        counter.style.color = "purple";
    }
}
cb.forEach(box => {
    box.addEventListener("change", update);
});

