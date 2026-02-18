window.onload = function() {
    const slider = document.getElementById('length-slider');
    const lengthVal = document.getElementById('length-val');
    const display = document.getElementById('password-display');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const loginInput = document.getElementById('login-input');
    const loginBtn = document.getElementById('login-btn');

    if (slider && lengthVal) {
        slider.oninput = function() {
            lengthVal.innerText = this.value;
        };
    }

    function generatePassword() {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
        let password = "";
        const length = slider ? slider.value : 12;
 
        for (let i = 0; i < length; i++) {
            const randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        
        display.innerText = password;
        display.style.color = "#00d2ff";
    }

    if (generateBtn) {
        generateBtn.onclick = generatePassword;
    }

    if (copyBtn) {
        copyBtn.onclick = function() {
            const text = display.innerText;
            if (text !== 'Нажми "Создать"') {
                navigator.clipboard.writeText(text);
                alert('Пароль скопирован! ✅');
                if (loginInput) loginInput.value = text;
            }
        };
    }
  };

const loginBtn = document.getElementById('login-btn'); 
const loginInput = document.getElementById('password-input');

if (loginBtn) {
    loginBtn.onclick = function() {
        const enteredPass = loginInput ? loginInput.value : "";
        
        const bannedPasswords = ["123456", "password", "admin", "qwerty", "letmein", "welcome", "monkey", "abc123", "111111", "123123", "iloveyou", "sunshine", "princess", "football", "charlie", "aa123456", "donald", "password1", "qwerty123", "12345678", "123456789", "12345", "1234", "1234567", "dragon", "baseball", "superman", "hello", "freedom", "whatever", "trustno1", "654321", "jordan", "harley", "password123", "123321", "mustang", "michael", "shadow", "master", "666666", "qwertyuiop", "1234567890", "123456789a", "123456789b", "123456789c"];

        if (enteredPass.length === 0) {
            alert("Поле пустое! Сгенерируйте пароль.");
        } 
        else if (enteredPass.length < 8) {
            alert("Ошибка доступа: Пароль слишком короткий и небезопасный! ❌");
        } 
        else if (bannedPasswords.includes(enteredPass.toLowerCase())) {
            alert("Внимание: Этот пароль слишком простой и заблокирован системой! ⚠️");
        } 
        else {
            alert("Доступ разрешен! Добро пожаловать в CyberVault. ✅");
        }
    };
}

 
