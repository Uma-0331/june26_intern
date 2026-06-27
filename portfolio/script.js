alert("Welcome to Uma Maheshwari's Portfolio!");
let text = "UMA MAHESHWARI";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}

typeWriter();