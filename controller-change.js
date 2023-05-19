const imageBtnEle = document.getElementById("image-btn");
const sceneEl = document.querySelector('a-scene');
const arSystem = sceneEl.systems["mindar-face-system"];
const planeElement = document.getElementById("medical-image");
const switchCameraButton = document.getElementById("camera-btn");
const imagesArray = [
  "./examples/img/ray1.jpg?raw=true",
  "./examples/img/ray2.jpg?raw=true",
  "./examples/img/ray3.jpg?raw=true"
]

function onConnect() {
  planeElement.setAttribute('src', imagesArray[0]);
  switchCameraButton.addEventListener('click', () => {

	  arSystem.switchCamera();
	});

imageBtnEle.addEventListener("click", function () {
  let index = imagesArray.indexOf(planeElement.getAttribute("src"));
  planeElement.setAttribute('src', imagesArray[index + 1]);
});
}

onConnect();

