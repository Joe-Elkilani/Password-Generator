const inp = document.getElementById("inp");
const generate = document.getElementById("generate");
const res = document.getElementById("res");
generate.addEventListener("click", function () {
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let specialChars = "!@#$%^&*()_-+=<>?/{}~|";
    let allChars = upperCase + lowerCase + numbers + specialChars;
    let passwordLength = parseInt(inp.value);
    if (isNaN(passwordLength) || passwordLength < 6) {
        res.textContent = "Password length must be at least 6 ‼‼";
        res.style.color = "#f00";
        return;
    } else if (passwordLength > 20) {
        res.textContent = "Password length must be at fir 20 ‼‼";
        res.style.color = "#f00";
        return;
    }
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    for (let i = password.length; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    res.textContent = password;
    res.style.color = "green";
    inp.value = "";
});