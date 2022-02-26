import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: "postgres",//`${process.env.POSTGRES_USERNAME}`,
  password: "postgres",//process.env.POSTGRES_PASSWORD,
  database: "postgres",//process.env.POSTGRES_DB,
  port: 5432,//Number(process.env.PORT),
  host: "database-1.cbplw7u4yuyy.us-east-1.rds.amazonaws.com",//process.env.POSTGRES_HOST,
  dialect: "postgres",
  aws_region: "us-east-1",//process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
