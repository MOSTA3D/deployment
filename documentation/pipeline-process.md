## Pipeline process
It will start with installing the required technologies for the application to work like:
* node
* aws-cli
* elastic beans cli

and then the job will start executing the commands in the steps specified.
* first it will execute both tests in the front and backend of the application
* installing frontend dependencies
* installing backend dependencies
* building the frontend app
* building the backend server
* deploying the frontend application to s3 bucket
* deploying the backend server to an elastic beanstalk environment