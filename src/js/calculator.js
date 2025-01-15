const display = document.getElementById("display");
const buttons = document.querySelectorAll(".row input");
const clearButton = document.querySelector(".cancel_btn");

let currentExpression = "";


buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const value = event.target.value;

        if (value === "=") {
            if (currentExpression.length > 0) {
                try {
                    currentExpression = eval(currentExpression).toString();
                } catch (error) {
                    currentExpression = "Error";
                }
                display.value = currentExpression;
            }
        } else if (value === "C") {
            currentExpression = "";
            display.value = currentExpression;
        } else {
            currentExpression += value;
            display.value = currentExpression;
        }

     
        button.classList.add("active");
        setTimeout(() => {
            button.classList.remove("active");
        }, 400);
    });
});


clearButton.addEventListener("click", () => {
    currentExpression = "";
    display.value = "";
});
