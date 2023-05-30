let change_color_button = document.getElementById(
    "change_calculator_colour_button"
);
let change_color_input = document.getElementById(
    "change_calculator_colour_input"
);

let calculator_color = document.getElementById("calculator")

change_color_button.addEventListener("click", change_color_func)

function change_color_func() {
    let color = change_color_input.value
    calculator_color.style.backgroundColor = color
}