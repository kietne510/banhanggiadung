//Thay đổi ảnh panner liên tục
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".panner img");
  let currentIndex = 0;

  function changeImage() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
  }

  let intervalId = setInterval(changeImage, 5000); // Thay đổi 5000 để đặt khoảng thời gian chuyển đổi

  // Tạm dừng chuyển đổi khi rê chuột vào hình ảnh
  images.forEach(image => {
      image.addEventListener("mouseenter", function() {
          clearInterval(intervalId);
      });
  });

  // Tiếp tục chuyển đổi khi rời chuột ra khỏi hình ảnh
  images.forEach(image => {
      image.addEventListener("mouseleave", function() {
          intervalId = setInterval(changeImage, 5000); // Thay đổi 5000 để đặt khoảng thời gian chuyển đổi
      });
  });
});
// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(button) {
  // Lấy thông tin sản phẩm từ phần tử cha của nút được nhấp
  let sanPham = button.parentElement;
  
  // Tạo đối tượng sản phẩm từ thông tin thu thập được
  let sanPhamMoi = {
      ten: sanPham.querySelector('p').innerText,
      gia: sanPham.querySelector('p:nth-child(2)').innerText,
      // Thêm các thuộc tính khác nếu cần
  };
  
  // Kiểm tra xem localStorage đã tồn tại giỏ hàng hay chưa
  let gioHang = JSON.parse(localStorage.getItem('gioHang')) || [];
  
  // Thêm sản phẩm vào giỏ hàng
  gioHang.push(sanPhamMoi);
  
  // Lưu giỏ hàng vào localStorage
  localStorage.setItem('gioHang', JSON.stringify(gioHang));
  
  // Hiển thị thông báo hoặc cập nhật giao diện người dùng
  alert("Sản phẩm đã được thêm vào giỏ hàng!");
  
  // Cập nhật giao diện người dùng (nếu cần)
}
// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(button) {
  var product = button.parentNode;
  var productName = product.querySelector("p:nth-of-type(1)").innerText;
  var productPrice = product.querySelector("p:nth-of-type(2)").innerText;

  // Lưu thông tin sản phẩm vào localStorage
  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: productName, price: productPrice });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Sản phẩm đã được thêm vào giỏ hàng!");
}




  
  
  
  