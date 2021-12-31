function masuk() {
  let username = document.login.username.value;
  let password = document.login.password.value;
  if (username == "hana2021" && password == "hana2021") {
    alert("Kamu berhasil login!");
  } else {
    alert("Maaf, username atau password yang kamu masukkan salah. coba lagi.");
  }
}
