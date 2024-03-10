// Lấy thông tin giỏ hàng từ localStorage và hiển thị
var cart = JSON.parse(localStorage.getItem("cart")) || [];
var cartContainer = document.getElementById("cart-container");

cart.forEach(function(item) {
    var productItem = document.createElement("div");
    productItem.innerHTML = "<p>" + item.name + "</p><p>" + item.price + "</p>";
    cartContainer.appendChild(productItem);
});
// Hàm hiển thị tổng giá tiền lên giao diện người dùng
function displayTotalPrice() {
    var totalPrice = calculateTotalPrice();
    var totalPriceContainer = document.getElementById("total-price");
    totalPriceContainer.innerText = "Tổng giá tiền: " + totalPrice.toLocaleString() + "đ";
}

// Gọi hàm hiển thị tổng giá tiền khi trang được tải
displayTotalPrice();
// Hàm xóa sản phẩm khỏi giỏ hàng
function removeItem(button) {
    var productName = button.parentNode.querySelector("p:nth-of-type(1)").innerText;

    // Lấy thông tin giỏ hàng từ localStorage
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Tìm và xóa sản phẩm khỏi giỏ hàng
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === productName) {
            cart.splice(i, 1);
            break;
        }
    }

    // Cập nhật lại thông tin giỏ hàng trong localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    //cập nhật số tiền
    displayTotalPrice();
    // Cập nhật giao diện hiển thị giỏ hàng
    displayCart();
}

// Hàm hiển thị thông tin giỏ hàng
function displayCart() {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";

    cart.forEach(function(item) {
        var productItem = document.createElement("div");
        productItem.innerHTML = "<p>" + item.name + "</p><p>" + item.price + "</p><button onclick='removeItem(this)'>Xóa</button>";
        cartContainer.appendChild(productItem);
    });
}

// Gọi hàm hiển thị giỏ hàng khi trang được tải
displayCart();
// Hàm tính tổng giá tiền của các sản phẩm trong giỏ hàng
function calculateTotalPrice() {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var totalPrice = 0;

    cart.forEach(function(item) {
        // Lấy giá tiền của sản phẩm và chuyển thành số nguyên
        var price = parseInt(item.price.replace(/\D/g, ""));
        totalPrice += price;
    });

    return totalPrice;
}

