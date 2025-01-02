// const input = document.getElementById("inputPassword");

// if (input.length < 6) {
//     alert("Ur password to short,try again!");
// }
// const passValid = /^[a-zA-Z0-9-_+/]{6-12}/
// const result = input.match(passValid);
// console.log(result);
// function btn(){

// }

const input = document.getElementById("inputPassword");
const easyHardPass = document.getElementById("checkPass");

input.oninput = () => {
    const checker = input.value;
    if (input.length < 6) {
        alert("Ur password to short,try again!");
    }
    else if (checker.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
        alert("you have a strong password");
    }
    else {
        alert("its okay,but you can better");
    }
}
