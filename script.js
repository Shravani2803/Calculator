const display = document.querySelector(".display-input");
const buttons = document.querySelectorAll(".buttons button");

let openBracket = true;

buttons.forEach(button => {
    button.addEventListener("click", () => {

        let value = button.innerText.trim();

        if (value === "AC") {
            display.value = "";
            openBracket = true;
        }
        else if (value === "=") {
            try {
                let expression = display.value
                    .replace(/÷/g, "/")
                    .replace(/×/g, "*");

                display.value = eval(expression);
            }
            catch {
                display.value = "Error";
            }
        }
        else if (value === "←") {
            display.value = display.value.slice(0, -1);
        }
        else if (value === "( )") {

            if (openBracket) {
                display.value += "(";
            } else {
                display.value += ")";
            }

            openBracket = !openBracket;
        }
        else {
            display.value += value;
        }
    });
});