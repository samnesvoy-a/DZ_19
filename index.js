


let input = document.querySelector("#search");
let countBlock = document.querySelector("#filmsCount");
let listArr = document.querySelectorAll("li");

let counter = 0;
input.oninput = function() {
    for (let i = 0; i < listArr.length; i++) {
        // console.log(listArr[i].innerText);
        if (listArr[i].innerText.indexOf(input.value) !== -1 ) {
            counter++;
        }
    }
    countBlock.innerHTML = counter;
    counter = 0;
};



let menuItem = document.querySelectorAll("#menu li");
menuItem.forEach(
    function (el, index) {

        el.addEventListener("click", function(event) {
            clicked = event.target.innerText;
            if (INGREDIENTS[clicked]) {
                let subItems = INGREDIENTS[clicked];

                let ol = document.createElement ("ol");
                subItems.forEach(function (subEl) {
                    let element2 = document.createElement("li");
                    let text = document.createTextNode(subEl);
                    element2.append(text)
                    ol.append(element2);
                });
                event.target.append(ol);
            }
        });
    }
);

let clicked;

const INGREDIENTS = {
    "cocoa": ["cocoa powder", "milk", "sugar"],
    "cappuccino": ["milk", "coffee"],
    "smoothie": ["banana", "orange", "sugar"],
    "matcha frappe": ["matcha", "milk", "ice"]
}


