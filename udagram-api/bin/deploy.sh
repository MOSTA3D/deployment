cd www &&
eb init --region $AWS_DEFAULT_REGION $EB_APP
eb create node-express-env &&
eb deploy node-express-env