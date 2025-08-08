# week-9-assignment

after trying to ammend my main js file

[vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.
Plugin: vite:import-analysis
File: /Users/user/Documents/digital-innovator/week-09/week-9-assignment/client/src/main.js:1:0
1 | console.log(
| ^
2 | "main.js here, reporting live from the scene of the new digital camera form"
3 | );

# fixed after i added a //curly bracket to the end of my code

# more work arounds

Node.js v22.16.0

==> Exited with status 1

==> Common ways to troubleshoot your deploy: https://render.com/docs/troubleshooting-deploys

main.js:33 GET https://week-9-assignment-server.onrender.com/digitalcameras 500 (Internal Server Error)
getAllDigitalCameras @ main.js:33
(anonymous) @ main.js:40Understand this error
VM213:1 Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON

Removed if statement from server.js

if (req.query.year) {
const allDigitalCamerasQuery = await db.query(
//`SELECT * FROM digital_cameras WHERE release_year = ${req.query.year}`
);
res.json(allDigitalCamerasQuery.rows);
} else {

+++++++++ this from line 23

console.log("the query on the /digitalcameras route", req.query);

Line27 main js

///console.log(serverResponse);
const parsedResponse = await serverResponse.json();
//console.log(parsedResponse);

if (parsedResponse.rowCount == 1) {
getAllDigitalCameras();
userDigitalCameraForm.reset();
}
}

# after 8+hours trying to work this through using the recordings as a basis for my workflow/ rewatching multiple times (my server render error and rendering my detabase onto the page) i've finally given in. I honestly don't have it in me to push with this code and will wait for assistance

# i was able to get my form to update my database and I'm stopping there
