const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};

const Facebook = () =>
{
  console.log("facebook clicked");
  window.open("https://www.facebook.com/profile.php?id=100078300151497");
};

const Twitter = () =>
{
  console.log("Twitter clicked");
  window.open("https://twitter.com/dsaboo456");
};

const instagram = () =>
{
  console.log("instagram clicked");
  window.open("https://www.instagram.com/dhruv_saboo");
};


const Telegram = () =>
{
  console.log("Telegram clicked");
  window.open("https://web.telegram.org/k/");
};


const Follow_me = () => {
  console.log("LinkeDin  clicked");
  window.open("https://www.linkedin.com/in/dhruvsaboo1805");
}
