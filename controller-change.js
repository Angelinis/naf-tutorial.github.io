const imageBtnEle = document.getElementById("image-btn");
const planeElement = document.getElementById("medical-image");
const imagesArray = [
  "/examples/img/ray1.jpg",
  "/examples/img/ray2.jpg",
  "/examples/img/ray3.jpg"
]

function onConnect() {
  planeElement.setAttribute('src', imagesArray[0]);
imageBtnEle.addEventListener("click", function () {
  let index = imagesArray.indexOf(planeElement.getAttribute("src"));
  planeElement.setAttribute('src', imagesArray[index + 1]);
});
}

onConnect();

