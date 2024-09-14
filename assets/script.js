//--------- Elements-----------
const lengthEl = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const passwordDisplay = document.getElementById("password-display");
const copyButton = document.getElementById("copy");
const alert_msg = document.getElementById("alert-msg");

//-------- Characters----------
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=-";

//------- Update length display-------------
lengthEl.addEventListener("input", () => {
  lengthValue.innerText = lengthEl.value;
});

//------- Generate password-----------
function generatePassword() {
  const length = parseInt(lengthEl.value);
  let charset = "";
  if (uppercaseEl.checked) charset += upper;
  if (lowercaseEl.checked) charset += lower;
  if (numbersEl.checked) charset += numbers;
  if (symbolsEl.checked) charset += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

//----------Generate Button event listener--------------
document.getElementById("generate").addEventListener("click", () => {
  const password = generatePassword();
  alert_msg.style.display = "none";
  passwordDisplay.innerText = password;
});

//--------- Copy functionality----------------
copyButton.addEventListener("click", () => {
  if (passwordDisplay.innerText == "") {
    alert_msg.style.display = "block";
    return;
  }

  navigator.clipboard.writeText(passwordDisplay.innerText).then(() => {
    // Show the "Copied" feedback when click
    const feedback = document.getElementById("copied-msg");
    feedback.innerText = "Copied";
    feedback.classList.remove("scale-0");
    feedback.classList.add(
      "scale-100",
      "border",
      "border-yellow-400",
      "bg-yellow-50"
    );
    setTimeout(() => {
      feedback.classList.remove(
        "scale-100",
        "border",
        "border-yellow-400",
        "bg-yellow-50"
      );
      feedback.innerText = "Copy";
      feedback.classList.add("scale-0");
    }, 2000);
  });
});
