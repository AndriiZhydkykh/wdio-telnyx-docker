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

#### To run tests use docker in all browsers

1. 
```
npm run dockerServerRun
```
2. 
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




