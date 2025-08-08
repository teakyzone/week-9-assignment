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

hmm

main.js:33 GET https://week-9-assignment-server.onrender.com/digitalcameras 500 (Internal Server Error)
getAllDigitalCameras @ main.js:33
(anonymous) @ main.js:40Understand this error
VM213:1 Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
