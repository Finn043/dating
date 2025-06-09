// Hàm điều hướng sang trang khác
function goToPage(pageName) {
  window.location.href = pageName;
}

// Dành cho trang confirm.html — gửi dữ liệu đến Google Apps Script
function submitResponse(name, place, walk) {
  const scriptURL = "https://script.google.com/macros/s/AKfycbwQNFbpg3D7-h8RbM_VVzqeD1jqjTGqPyWH_fqY_cjEw-gKCiq5mhfHiseZgawxBumx-w/exec";
  const formData = new FormData();
  formData.append("name", name);
  formData.append("restaurant", place);
  formData.append("walk", walk);

  fetch(scriptURL, {
    method: "POST",
    body: formData,
  })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
}

// Hàm xử lý các nút nếu muốn tách khỏi HTML (không bắt buộc dùng)
document.addEventListener("DOMContentLoaded", function () {
  // Nếu có nút Yes trang index.html
  const yesIndex = document.querySelector("#yesBtn");
  if (yesIndex && window.location.pathname.includes("index.html")) {
    yesIndex.addEventListener("click", function () {
      goToPage("page2.html");
    });
  }

  // Nếu có nút Yes trang page2.html
  if (yesIndex && window.location.pathname.includes("page2.html")) {
    yesIndex.addEventListener("click", function () {
      goToPage("cuisine.html");
    });
  }

  // Nếu ở trang confirm.html có nút submit
  const confirmBtn = document.getElementById("submitConfirm");
  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
      const restaurant = localStorage.getItem("selectedRestaurant") || "Nhà hàng bí ẩn";
      const walk = localStorage.getItem("selectedWalk") || "Chưa rõ địa điểm";
      submitResponse("Chị Phương", restaurant, walk);
    });
  }
});
