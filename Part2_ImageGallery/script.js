/*
Name: Aiesha Asim
File: script.js
Date: 28 November 2025
Part 2 - Image Gallery
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 1. Create the images array */

const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" }
];

/* Base URL for images */
const baseURL = "images/";

/* 1. Create the images array */

const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" }
];

/* Base URL for images */
const baseURL = "images/";

/* 2. Add thumbnails dynamically */

for (const img of images) {
  const newImage = document.createElement("img");
  newImage.src = baseURL + img.filename;
  newImage.alt = img.alt;
  newImage.setAttribute("tabindex", "0");

  newImage.addEventListener("click", () => {
    updateDisplayedImage(newImage);
  });

  thumbBar.appendChild(newImage);
}
/* 3. Update displayed image */

function updateDisplayedImage(imgElement) {
  displayedImage.src = imgElement.src;
  displayedImage.alt = imgElement.alt;
}
