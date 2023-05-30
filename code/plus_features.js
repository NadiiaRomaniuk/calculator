let display_field = document.getElementById("calculator_display_par");

let factorial_button = document.getElementById("is_factorial_button");
let show_factorial = document.getElementById("show_factorial_memb_button");
let input_factorial = document.getElementById("memb_number_factorial_input");
let plus_features_counter;
factorial_button.addEventListener("click", is_factorial);

let fibonacci_button = document.getElementById("is_fibo_button");
let show_fibonacci = document.getElementById("show_fibo_memb_button");
let input_fibonacci = document.getElementById("memb_number_fibo_input");
let plus_features_counter_fibo;
fibonacci_button.addEventListener("click", is_fibonacci);

calculator.addEventListener("click", disable)

function disable() {
    show_fibonacci.removeEventListener("click", show_fibonacci_func);
    show_factorial.removeEventListener("click", show_factorial_func);
}




function is_fibonacci() {
    plus_features_counter_fibo = 0;
    let number = display_field.innerText
    if (number.includes(".")) {
        number = parseFloat(number);
    } else number = parseInt(number);
    if (number === 1 || number === 2) {
        display_field.innerText = "true";
        plus_features_counter_fibo = 2
        show_fibonacci.addEventListener("click", show_fibonacci_func);
        return;
    }
    let result = 1;
    let k = 2;
    for (i = 1; i <= 1000; i++) {
        let variable = result;
        result = result + k;
        plus_features_counter_fibo = plus_features_counter_fibo + 1
        if (result >= 5) {
            k = variable
        }
        if (result === number) {
            display_field.innerText = "true";
            show_fibonacci.addEventListener("click", show_fibonacci_func);
            return;
        }
        if (result > number) {
            display_field.innerText = "false";
            return;
        }

    }
}

function show_fibonacci_func() {
    let result = 1;
    let k = 2;
    let input_value = input_fibonacci.value;

    if (input_value === "2") {
        display_field.innerText = 2;
        input_fibonacci.value = "";
        return;
    }

    if (input_value > plus_features_counter_fibo + 2) {
        alert("such memeber does not exist");
        return;
    }
    if (input_value < 0) {
        alert("such memeber does not exist");
        return;
    }

    for (let i = 1; i <= input_value - 2; i++) {
        let variable = result;
        result = result + k;
        if (result >= 5) {
            k = variable;
        }
    }
    display_field.innerText = result;
    input_fibonacci.value = "";
}




function is_factorial() {
    plus_features_counter = 0;
    let number = display_field.innerText;
    if (number.includes(".")) {
        number = parseFloat(number);
    } else number = parseInt(number);

    let a = 1;
    for (i = 1; i <= 1000; i++) {
        a = a * i;
        plus_features_counter = plus_features_counter + 1;
        if (a === number) {
        display_field.innerText = "true";
        show_factorial.addEventListener("click", show_factorial_func);
        return;
        }
    if (a > number) {
        display_field.innerText = "false";
        return;
        }   
    }
}

function show_factorial_func() {
  let number = 1;
  let input_value = input_factorial.value;
  if (input_value > plus_features_counter) {
    alert("such memeber does not exist");
    return;
  }
  if (input_value < 0) {
    alert("such memeber does not exist");
    return;
  }
  for (let i = 1; i <= input_value; i++) {
    number = number * i;
  }
  display_field.innerText = number;
  input_factorial.value = "";
}
