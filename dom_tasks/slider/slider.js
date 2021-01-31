const rightBtn = document.querySelector("#right");
const leftBtn = document.querySelector("#left");
const items = document.querySelector("#items");

const loop = (direction, e) => {
    e.preventDefault();

    if(direction === "rightBtn") {
        items.appendChild(items.firstElementChild);
    } else {
        items.insertBefore(items.lastElementChild, items.firstElementChild);
    }
};

rightBtn.addEventListener("click", (e) => {
    loop("rightBtn", e);
});

leftBtn.addEventListener("click", (e) => {
    loop("leftBtn", e);
});

// const computedStyles = getComputedStyle(items);

// rightBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     let currentRight = parseInt(computedStyles.right)

//     if(currentRight < 500) {
//         items.style.right = `${currentRight + 100}px`;
//     }
// });

// leftBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     let currentRight = parseInt(computedStyles.right)

//     if(currentRight > 0) {
//         items.style.right = `${currentRight - 100}px`;
//     }
// });