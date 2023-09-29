# WProofreader SDK & HTML controls example

This example demonstrates how to integrate [WProofreader SDK](https://www.npmjs.com/package/@webspellchecker/wproofreader-sdk-js) with HTML controls.

For a detailed guide on initializing and configuring WProofreader SDK in any JavaScript project, please refer to our [main README](https://github.com/WebSpellChecker/wproofreader-sdk-js/blob/master/README.md).

## Prerequisites

* Ensure your Node.js version is `>=14.15.0`. You can check your version with the command `node -v`.

## Setup
1. Go to the `index.js` file and locate the configure method. Specify your `serviceId` if you are testing a [cloud service](https://github.com/WebSpellChecker/wproofreader-sdk-js#for-the-cloud-based-version) or backend endpoint for the [self-hosted product version](https://github.com/WebSpellChecker/wproofreader-sdk-js#for-the-server-version). 

2. Execute the following commands in your terminal to initialize and start the project.

	```
	npm install
	npm run start
	```

3. Once the project is running, open your browser and navigate to http://localhost:5000 to view and interact with the demo.
