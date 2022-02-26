cd www &&
eb init --region $AWS_DEFAULT_REGION $EB_APP
eb use node-express-env
eb deploy