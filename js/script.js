// DOM Navbar
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Agar hamburger menu hilang saat diklik diluar sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//Alert tentang website
const aboutWebsite = () => {
  alert("Website untuk menghasilkan random password secara acak");
};

// DOM Password generator
let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");

// Logic generate password
const generatePassword = (len) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`";

  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = "";
  if (passwordLength.value < 1 || passwordLength.value > 50) {
    alert("Masukkan angka yang valid");
    return false;
  }

  for (let index = 0; index < len; index++) {
    generator += data[Math.floor(Math.random() * data.length)];
  }
  return generator;
};

// Output password
const getPassword = () => {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
};
