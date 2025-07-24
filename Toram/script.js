function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("hidden");
}

function showWeapon(type) {
  const display = document.getElementById("weapon-display");
  const img = document.getElementById("weapon-img");

  if (type === "dsword") {
    img.src = "assets/dsword.png";
    img.alt = "Dual Sword";
  } else if (type === "halberd") {
    img.src = "assets/halberd.png";
    img.alt = "Halberd";
  }

  display.classList.add("show");
  display.classList.remove("hidden");
}

function closeWeapon() {
  const display = document.getElementById("weapon-display");
  display.classList.remove("show");
  setTimeout(() => {
    display.classList.add("hidden");
  }, 300); // tunggu animasi selesai
}
