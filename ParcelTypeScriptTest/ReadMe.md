# Prerequisites
Make sure you have Node and Yarn installed. 
``` sh
winget install node
winget install yarn
```

# Repo setup
Create new site folder.

``` sh
mkdir SimpleTest
cd SimpleTest
```

Add dev dependencies.
``` sh
yarn add parcel --dev
yarn add typescript --dev 
yarn add @types/react @types/react-dom --dev
```

Create simple page `src/index.html` and app script `src/app.ts`. Include the TypeScript to your Html page:

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Test</title>
</head>
<body>
  <h1>Simple Test</h1>
  <div id="root">Hello.</div>
  <script type="module" src="app.ts"></script>
</body>
</html>
```

Create simple app script:

``` ts
console.log("JavaScript is running on Simple Test index.html page.");

var rootElement = document.getElementById("root");
if (rootElement) {
  rootElement.innerText = "Hello, World!";
}
```

# Configure Parcel
Update your `package.json` configuration file:

``` json
{
  "name": "SimpleTest",
  "source": "src/index.html",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
  },
  "devDependencies": {
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.2.7",
    "parcel": "^2.9.3",
    "typescript": "^5.2.2"
  }
}
```

# Run web site
From the command line, run the following:

``` sh
yarn build
yarn start
```