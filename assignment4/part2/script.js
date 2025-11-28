const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
const images = [
  { filename: "pic1.jpg", alt: "A Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "A Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Some purple and white pansies" },
  { filename: "pic4.jpg", alt: "A section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "A large moth on a leaf" },
];
const baseURL ="https://mdn.github.io/shared-assets/images/examples/learn/gallery/";
for (const image of images) {
  const newImage = document.createElement("img");
  newImage.src = `${baseURL}${image.filename}`;
  newImage.alt = image.alt;
  newImage.tabIndex = "0";
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", updateDisplayedImage);
  newImage.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      updateDisplayedImage(e);
    }
  });
}
function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

btn.addEventListener("click", () => {
  // If the button has a "dark" class set,
  // change text to "Lighten" and make the overlay darker
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    // Else, change text to "Darken" and make
    // the overlay lighter
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }
  // Toggle the class ready for the next button press
  btn.classList.toggle("dark");
});