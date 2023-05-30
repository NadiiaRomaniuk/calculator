

/*CREATING CALCULATOR BUTTONS*/
let calculator_button_values = ["C", "sqrt", "%", "*", "7", "8", "9", "/", "4", "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ".", "="];
let calculator = document.getElementById("calculator_buttons_div");

create_calculator_buttons()
function create_calculator_buttons() {
    for (let i = 0; i < 20; i++) {
        let button = document.createElement("button");
        button.classList.add("calculator_buttons");
        button.innerText = calculator_button_values[i]
        button.setAttribute("id", "id" + i)
        calculator.appendChild(button);
    }
}

function check_for_length() {
    if (
      display_field.innerText.includes("++") || display_field.innerText.includes("//" || display_field.innerText.includes("**"))
    ) {
        if (display_field.innerText.length > 9) {
            display_field.innerText = "";
            return
        }
    }
      if (display_field.innerText.length > 11) {
        display_field.innerText = "";
      }
}

function number_button_func() {
    if (
        display_field.innerText === "true" ||
        display_field.innerText === "false"
    ) {
        display_field.innerText = "";
    }
}



/*MANAGING BUTTONS*/

let clean_button = document.getElementById("id0")
clean_button.addEventListener("click", clear_button_func)
let root_button = document.getElementById("id1")
root_button.addEventListener("click", root_button_func)
let percent_button = document.getElementById("id2")
percent_button.addEventListener("click", percent_button_func)
let minus_button = document.getElementById("id16")
minus_button.addEventListener("click", minus_func)

let multiply_button = document.getElementById("id7");
multiply_button.addEventListener("click", multiply_button_func);
let divide_button = document.getElementById("id3");
divide_button.addEventListener("click", divide_button_func);
let add_button = document.getElementById("id15");
add_button.addEventListener("click", add_button_func);
let substract_button = document.getElementById("id11");
substract_button.addEventListener("click", substract_button_func);
let equals_button = document.getElementById("id19");
equals_button.addEventListener("click", equals_button_func);

let coma_button = document.getElementById("id18");
coma_button.addEventListener("click", coma_button_func);

let nine_button = document.getElementById("id6");
nine_button.addEventListener("click", nine_button_func);
let eight_button = document.getElementById("id5");
eight_button.addEventListener("click", eight_button_func);
let seven_button = document.getElementById("id4");
seven_button.addEventListener("click", seven_button_func);
let six_button = document.getElementById("id10");
six_button.addEventListener("click", six_button_func);
let five_button = document.getElementById("id9");
five_button.addEventListener("click", five_button_func);
let four_button = document.getElementById("id8");
four_button.addEventListener("click", four_button_func);
let three_button = document.getElementById("id14");
three_button.addEventListener("click", three_button_func);
let two_button = document.getElementById("id13");
two_button.addEventListener("click", two_button_func);
let one_button = document.getElementById("id12");
one_button.addEventListener("click", one_button_func);
let zero_button = document.getElementById("id17");
zero_button.addEventListener("click", zero_button_func);

let coma_ind = false;

function multiply_button_func() {
    if (display_field.innerText === "") {
      display_field.innerText = "";
      return;
    }
    number_button_func();
    check_for_length();
    display_field.innerText = display_field.innerText + multiply_button.innerText;
    coma_ind = false;
}

function divide_button_func() {
    if (display_field.innerText === "") {
      display_field.innerText = "";
      return;
    }
    number_button_func();
    check_for_length();
    display_field.innerText = display_field.innerText + divide_button.innerText;
    coma_ind = false;
}

function add_button_func() {
    if (display_field.innerText === "") {
      display_field.innerText = "";
      return;
    }
    number_button_func();
    check_for_length();
    display_field.innerText = display_field.innerText + add_button.innerText;
    coma_ind = false;
}

function substract_button_func() {
    if (display_field.innerText === "") {
      display_field.innerText = "";
      return;
    }
    number_button_func();
    check_for_length();
    display_field.innerText = display_field.innerText + substract_button.innerText;
    coma_ind = false
}



function coma_button_func() {
    if (display_field.innerText === "") {
        display_field.innerText = ""
        return
    }
    coma_func()
    number_button_func();
    check_for_length();
    display_field.innerText = display_field.innerText + coma_button.innerText;
    if (coma_ind) {
        display_field.innerText = ""
        coma_ind = false;
        alert("Invalid num")
        return
    }
    coma_ind = true;
}

function coma_func() {
    let index = display_field.innerText.indexOf(".")
    if (
      display_field.innerText.includes(".") === "." &&
      display_field.innerText.charAt(index + 5) === "+" &&
      display_field.innerText.charAt(index + 5) === "-" &&
      display_field.innerText.charAt(index + 5) === "*" &&
      display_field.innerText.charAt(index + 5) === "/"
    ) {
      alert("Can't insert another coma");
      return;
    }
}


function equals_button_func() {
    number_button_func();
    check_for_length();
    evaluate()
    coma_ind = false;
}

function evaluate() {
    let expression = display_field.innerText
    if (expression.includes("==") || expression.includes("++") || expression.includes("**") || expression.includes("//") || expression.includes("--")) {
        display_field.innerText = ""
        alert("Invalid expression")
    }
    if (display_field.innerText.includes(",+") || display_field.innerText.includes(",-") || display_field.innerText.includes(",*") || display_field.innerText.includes(",/")
    ) {
        alert("Invalid expression");
    }
    
    let result = math.evaluate(expression)
    let roundedResult = math.round(result, 4);
    display_field.innerText = roundedResult


}




function minus_func() {
    number_button_func();
    check_for_length();
    display_field.innerText = display_field.innerText + "-";
}

function clear_button_func() {
    display_field.innerText = ""
    coma_ind = false;
}

function root_button_func() {
    if (display_field.innerText === "" || display_field.innerText === "true" || display_field.innerText === "false") {
        display_field.innerText = ""
        return
    }
    if (display_field.innerText.includes("+") || display_field.innerText.includes("-") || display_field.innerText.includes("*") || display_field.innerText.includes("/")){
        display_field.innerText = ""
        return;
    }

    let number = parseInt(display_field.innerText);
    let root_number = Math.sqrt(number).toFixed(4)
    display_field.innerText = root_number
    coma_ind = false;
}

function percent_button_func() {
    let number = display_field.innerText;
    if (display_field.innerText === "" || display_field.innerText.includes("+") || display_field.innerText.includes("-") || display_field.innerText.includes("*") ||display_field.innerText.includes("/")
    ) {display_field.innerText = ""; return;
    }
    if (number.includes(".")) {
        number = parseFloat(number);
    } else number = parseInt(number);
    let percent_number = number / 100;
    display_field.innerText = percent_number
    coma_ind = false;
}


function nine_button_func() {
  number_button_func();
  check_for_length();
  display_field.innerText = display_field.innerText + nine_button.innerText;
}

function eight_button_func() {
  number_button_func();
  check_for_length();
  display_field.innerText = display_field.innerText + eight_button.innerText;
}

function seven_button_func() {
  number_button_func();
  check_for_length();
  display_field.innerText = display_field.innerText + seven_button.innerText;
}

function six_button_func() {
    number_button_func()
    check_for_length()
    display_field.innerText = display_field.innerText + six_button.innerText;
}

function five_button_func() {
    number_button_func()
    check_for_length()
    display_field.innerText = display_field.innerText + five_button.innerText;
}

function four_button_func() {
    number_button_func();
    check_for_length();
    display_field.innerText = display_field.innerText + four_button.innerText;
}

function three_button_func() {
  number_button_func();
  check_for_length();
  display_field.innerText = display_field.innerText + three_button.innerText;
}

function two_button_func() {
    number_button_func();
    check_for_length();
    display_field.innerText = display_field.innerText + two_button.innerText;
}

function one_button_func() {
    number_button_func();
    check_for_length();
    display_field.innerText = display_field.innerText + one_button.innerText;
}

function zero_button_func() {
    number_button_func();
    check_for_length();
    display_field.innerText = display_field.innerText + zero_button.innerText;
}

