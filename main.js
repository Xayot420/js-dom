
let ism = prompt("Ismingizni kiriting:");
let familiya = prompt("Familiyangizni kiriting:");
let yosh = prompt("Yoshingizni kiriting:");

if (!ism || !familiya || !yosh) {
    alert("Siz ma'lumotlaringizni kiritmadingiz!");
} else {
    let tanlov = prompt("Ism va familiyani o'zgartirishni tanlang:\n1) Katta qilish\n2) Kichik qilish");

    if (tanlov === "1") {
        ism = ism.toUpperCase();
        familiya = familiya.toUpperCase();
    } else if (tanlov === "2") {
        ism = ism.toLowerCase();
        familiya = familiya.toLowerCase();
    } else {
        alert("Noto'g'ri tanlov!");
    }

    const resultDiv = document.getElementById("result");
    resultDiv.classList.add("result"); 
    resultDiv.innerHTML = `
        <p>Ismi: ${ism}</p>
        <p>Familiyasi: ${familiya}</p>
        <p>Yoshi: ${yosh}</p>
    `;
}
