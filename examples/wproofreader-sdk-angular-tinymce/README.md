# WProofreader SDK & TinyMCE Editor example in Angular

This example demonstrates how to integrate [WProofreader SDK](https://www.npmjs.com/package/@webspellchecker/wproofreader-sdk-js) with [TinyMCE WYSIWYG Editor](https://www.tiny.cloud/) within a [Angular](https://angular.io/) application.

For a detailed guide on initializing and configuring WProofreader SDK in any JavaScript project, please refer to our [main README](https://github.com/WebSpellChecker/wproofreader-sdk-js/blob/master/README.md).

## Prerequisites

* Ensure your Node.js version is `^16.14.0 || >=18.10.0`. You can check your version with the command `node -v`.

## Setup
1. Go to the `app.module.ts` file and locate the `configure` method. Specify your `serviceId` if you are testing a [cloud service](https://github.com/WebSpellChecker/wproofreader-sdk-js#for-the-cloud-based-version) or backend endpoint for the [self-hosted product version](https://github.com/WebSpellChecker/wproofreader-sdk-js#for-the-server-version). 

2. Execute the following commands in your terminal to initialize and start the project.

	```
	npm install
	npm run start
	```

3. Once the project is running, open your browser and navigate to http://localhost:4200 to view and interact with the demo.
