cd www &&
eb init --region $AWS_DEFAULT_REGION $EB_APP
eb use $EB_ENV
eb deploy