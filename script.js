const features = [
    "Biz haqimizda",
    "Foydalanuvchi bilan o‘zaro aloqada bo‘lish",
    "Animatsiyalar va effektlar qo‘shish",
    "Ma’lumotlarni serverdan olish va qayta ishlash",
];

const featureContainer = document.querySelector(".feature-container");

features.forEach(feature => {
    let div = document.createElement("div");
    div.className = "feature-item";
    div.textContent = feature;
    featureContainer.appendChild(div);
});

document.getElementById("runCode").addEventListener("click", function() {
    alert("Salom, JavaScript ishladi!");
});
