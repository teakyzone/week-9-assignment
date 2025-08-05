console.log("main.js here, reporting live from the scene of the new digital camera form");

const userDigitalCameraForm = document.getElementById("user_digital_camera_form");

userDigitalCameraForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // I need to get the form data out of my form with our two helpful lines:
  const data = new FormData(userDigitalCameraForm);
  const formValues = Object.fromEntries(data);
  console.log(formValues);

  // Now what I need to do is send that form data to my server
  // I'll do this with a fetch() request to our server endpoint, which uses the http POST method, and has some options attached to it.
  fetch("http://localhost:8222/digitalcameras", {
    method: "POST", // we tell our fetch request which HTTP method we're using
    body: JSON.stringify(formValues), // we need to attach a body of information. JSON.stringify does exactly that - it makes the data into a string.
    headers: {
      "Content-Type": "application/json",
    }, // json stands for Javascript Object Notation. We're explaining the format of what we're sending.
  });


  getAllDigitalCameras();
  userDigitalCameraForm.reset();
}

const digitalCameraContainer = document.getElementById("digital_camera_container")

async function getAllDigitalCameras (){
  digitalCameraContainer.innerHTML ="";
  const response = await fetch("//insert my render html")
;
const digitalCameraData = await response.json();
console.log("The digital camera data is:", digitalCameraData);

digitalCameraData.forEach((digitalcamera)
=> {
  //console.log(digitalcamera);

  const cameraBrand = document.createElement("h3")
  //etc etc

  //attatched to object in database from console log to loop digitalcamera.camera_brand

  cameraBrand.textContent = digitalcamera.camera_brand;

  digitalCameraContainer.append(cameraBrand, cameraModel ///etc etc)]]

  // etc etc 
)});
}

getAllDigitalCameras();
