# serverless-api

Simple Crud api app on AWS with API-Gateway,DynamoDB and Lambda

## Routes:

1. Main Route: https://k6xrp9wc5h.execute-api.us-east-1.amazonaws.com
2. GetAllPeople: https://k6xrp9wc5h.execute-api.us-east-1.amazonaws.com/people
3. GetSinglePerson: https://k6xrp9wc5h.execute-api.us-east-1.amazonaws.com/people/id
4. DeleteSinglePerson: https://k6xrp9wc5h.execute-api.us-east-1.amazonaws.com/people/id
5. UpdateSinglePerson: https://k6xrp9wc5h.execute-api.us-east-1.amazonaws.com/people/id

Each route expect an Id as input except for all people route and each route return JSON object of the result except for the delete route where it's return empty object.
