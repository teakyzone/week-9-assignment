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
    //    http://localhost:8222/digitalcameras tried all ways of combining these and it doesnt work https://week-9-assignment-server.onrender.com/digitalcameras i get server errors
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
  const response = await fetch(
    "https://week-9-assignment-server.onrender.com/digitalcameras"
  );
  const digitalCameraData = await response.json();
  console.log("The digital camera data is:", digitalCameraData);

  digitalCameraData.forEach((digitalcamera) => {
    //console.log(digitalcamera);

    const brand = document.createElement("h3");
    const series = document.createElement("p");
    const model = document.createElement("p");
    const releaseYear = document.createElement("p");
    const img = document.createElement("img");
    const alt = document.createElement("p");

    brand.textContent = digitalcamera.camera_brand;
    series.textContent = digitalcamera.camera_series;
    model.textContent = digitalcamera.camera_model;
    releaseYear.textContent = digitalcamera.release_year;
    img.src = digitalcamera.img_source;
    alt.textContent = digitalcamera.img_alt;

    digitalCameraContainer.append(brand, series, model, releaseYear, img, alt);
  });
}

getAllDigitalCameras();
// digitalCameraContainer.innerHTML = "";
