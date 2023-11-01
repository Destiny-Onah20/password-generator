const generateBtn = document.getElementById("generate");
const display = document.getElementById("display");

const check1 = document.getElementById("check1").checked;


const passwordValue = document.getElementById("num");
const v = 0;
4

const generateToken = () => {
  const digits = '0123456789';
  let uniqueNumber = '';

  while (uniqueNumber.length < 4) {
    const randomDigit = digits.charAt(Math.floor(Math.random() * digits.length));

    if (!uniqueNumber.includes(randomDigit)) {
      uniqueNumber += randomDigit;
    }
  }

  return uniqueNumber;
};


generateToken().toUpperCase();
generateBtn.addEventListener("click", () => {
  display.innerHTML = generateToken();
});




