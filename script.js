function sendConfirmation(restaurant) {
  fetch("https://script.google.com/macros/s/AKfycbwQNFbpg3D7-h8RbM_VVzqeD1jqjTGqPyWH_fqY_cjEw-gKCiq5mhfHiseZgawxBumx-w/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ restaurant })
  }).then(() => {
    alert("Đã gửi xác nhận thành công 🥰");
    window.location.href = "finish.html";
  }).catch((error) => {
    alert("Lỗi khi gửi xác nhận 😥");
    console.error(error);
  });
}
