const input = document.getElementById("inputPassword");

if (input.length < 6) {
    alert("Ur password to short,try again!");
}

const passValid = /^[a-zA-Z0-9-_+/]{6-12}/
const result = input.match(passValid);
console.log(result);



