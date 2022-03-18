const rotationItemCards = document.getElementsByClassName("rotation-item-card");
const rotationAllows = document.getElementsByClassName("rotation-allow");
const rotationDescriptions = document.getElementsByClassName(
  "rotation-item-description"
);
const rotationPic = document.getElementsByClassName("rotation-pic")[0];

function removeActive() {
  [].forEach.call(rotationAllows, (item) => {
    item.classList.remove("active");
  });
  [].forEach.call(rotationDescriptions, (item) => {
    item.classList.remove("active");
  });
}

[].forEach.call(rotationItemCards, (item) => {
  item.addEventListener("click", (e) => {
    const attr = item.getAttribute("attr");
    removeActive();
    rotationPic.setAttribute("src", `./image/pages/${attr}.png`);
    const activeAllow = document.getElementById(`allow-${attr}`);
    const activeDescription = document.getElementById(`description-${attr}`);
    activeAllow.classList.add("active");
    activeDescription.classList.add("active");
  });
});
