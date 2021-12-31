function validation() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let otw = document.getElementById("otw").value;
  let kota = document.getElementById("kota").value;
  let tiket = document.getElementById("tiket").value;
  let error = document.getElementById("error");
  let text;

  error.style.padding = "10px";
  if (name > 30) {
    text = "Please enter valid name. Try Again";
    error.innerHTML = text;
    return false;
  }
  if ((email.indexOf = "@" == -1 || email.length < 6)) {
    text = "Please enter valid email. Try Again";
    error.innerHTML = text;
    return false;
  }
  if (otw == "") {
    text = "Please choose the time. Try Again";
    error.innerHTML = text;
    return false;
  }
  if (kota == "") {
    text = "Please choose the City. Try Again";
    error.innerHTML = text;
    return false;
  }
  if (tiket > 10) {
    text = "Ticket can be 1-10. Try Again";
    error.innerHTML = text;
    return false;
  }
}
