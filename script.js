document.getElementById("myButton").addEventListener("click", function () {
    const now = new Date();
    document.getElementById("output").textContent =
        "Bây giờ là: " + now.toLocaleString("vi-VN");
});