# systers.github.io
## Project Overview
This is the main website for Systers Open Source.  It contains information about our various open source projects, the programs we participate in (as well as their historical data), information about how to contribute, and general information about how to contact us.

In the future, we hope to add Google Calendar integration and additional orientation/onboarding materials.

## Documentation
Link: https://docs.google.com/document/d/18X83wQjltI2PyWmYqNx4cHvGdTBTu2NaWnlIizdsLO8/edit#

## Installation
To preview, run these commands in your terminal (as long as you’ve previously installed [node](https://nodejs.org/en/download/)):

1. `git clone https://github.com/systers/systers.github.io`
2. `cd systers.github.io`
3. `git checkout develop`
4. `npm install`
5. `npm install -g @angular/cli`
6.  Run the command `npm run dev` to run the client side and server side simultaneously. 
7.  Run the command `npm run watch` to run the server side code in development mode (The node instance restarts whenver you edit any javascript file). 


## Contact Information
If you have any questions or want to discuss something about this repo, please sign up for the [AnitaB.org Open Source Zulip](http://anitab-org.zulipchat.com/).

## Travis Integration
- Tests are automatically run through Travis-CI for PR's.
- Currently the gsoc18-code branch is setup to deploy to heroku after a successful build, will be changed to the master branch in the future.
