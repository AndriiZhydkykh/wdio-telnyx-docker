# JavaScript auto test (webdriverIO chrome,firefox,microsoft edge and allure report) for site www.telnyx.com

## Installation: 
- Install node js v18.9.0 or higher
- Install java 8
- Install visual studio code
- Install Docker

### In the terminal run this code:
```
npm i
```


## Tests:
### Run this command in a terminal in visual studio code to run the auto tests and get a report in allure:

#### To run tests in all browsers local headless mode:
```
npm run test:allBrowsers:headless
```
#### To run tests in chrome or firefox or edge browsers local headless mode:
```
npm run test:chrome:headless"
```
```
npm run test:firefox:headless"
```
```
npm run test:edge:headless"
```
#### To run one file in chrome or firefox or edge browsers local headless mode:
```
npm run test:chrome:OneFile" + name file that you want to be run
```
```
npm run test:firefox:OneFile" + name file that you want to be run
```
```
npm run test:edge:OneFile" + name file that you want to be run
```
#### For example : npm run test:chrome:OneFile header.spec.js
---
#### To run tests in all browsers local :
```
npm run test:allBrowsers
```
#### To run tests in chrome or firefox or edge browsers local:
```
npm run test:chrome"
```
```
npm run test:firefox"
```
```
npm run test:edge"
```
---
#### To run tests use docker in all browsers

```
npm run dockerServerRun
```

```
npm run test:dockerAllBrowsers
```
To run tests in chrome or firefox or edge browsers use docker:

##### Run the  docker in your machine and type in the terminal these commands

```
npm run dockerServerRun
```

```
npm run test:dockerChrome
```
```
npm run test:dockerFireFox
```
```
npm run test:dockerEdge
```
######
To see how to pass tests run in docker open http://localhost:4444/ui/index.html#/sessions after running the tests

#### For close the docker server 

```
npm run dockerServerClose
```

#### To open the allure report
```
npm run allureReportOpen
```
---




