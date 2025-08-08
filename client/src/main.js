console.log(
  "main.js here, reporting live from the scene of the new digital camera form"
);

const userDigitalCameraForm = document.getElementById(
  "user_digital_camera_entry_form"
);

userDigitalCameraForm.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  console.log("form submitted");

  const data = new FormData(userDigitalCameraForm);
  const formValues = Object.fromEntries(data);
  console.log(formValues);

  const serverResponse = await fetch("http://localhost:8222/digitalcameras", {
    //   https://week-9-assignment-server.onrender.com/digitalcameras
    method: "POST",
    body: JSON.stringify(formValues),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const digitalCameraContainer = document.getElementById(
  "digital_camera_container"
);

async function getAllDigitalCameras() {
  const response = await fetch("https://week-9-assignment-server.onrender.com");
  const digitalCameraData = await response.json();
  console.log("The digital camera data is:", digitalCameraData);
}

getAllDigitalCameras();
// digitalCameraContainer.innerHTML = "";
