const choose = document.querySelector("select");

choose.onclick = function () {
  let img = document.querySelector("img");
  if (choose.value == "serim") {
    img.setAttribute("src", "serim.jpeg");
  } else if (choose.value == "allen") {
    img.setAttribute("src", "allen.jpeg");
  } else if (choose.value == "woobin") {
    img.setAttribute("src", "woobin.jpeg");
  } else if (choose.value == "wonjin") {
    img.setAttribute("src", "wonjin.jpeg");
  } else if (choose.value == "jungmo") {
    img.setAttribute("src", "jungmo.jpeg");
  } else if (choose.value == "minhee") {
    img.setAttribute("src", "minhee.jpeg");
  } else if (choose.value == "hyeoungjun") {
    img.setAttribute("src", "hyeoungjun.jpeg");
  } else if (choose.value == "taeyoung") {
    img.setAttribute("src", "taeyoung.jpeg");
  } else {
    img.setAttribute("src", "seongmin.jpeg");
  }
};

alert("ini adalah member cravity");
