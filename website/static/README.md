OK, we are going to use npm to manage dependencies for the frontend as well.
It will help with amazon cognito etc.

For the GET hello API call, this is now auth protected. To create a new test user easily use:

aws cognito-idp sign-up \
  --region <region> \
  --client-id <id> \
  --username <Something> \
  --password <Something!>

  aws cognito-idp admin-confirm-sign-up \
  --region <region> \
  --user-pool-id <id> \
  --username <name>

login
aws cognito-idp admin-initiate-auth --user-pool-id <id> --client-id <id> --auth-flow ADMIN_NO_SRP_AUTH --auth-parameters USERNAME=<username-email>,PASSWORD=<password> --region <region>

  To run website locally, use the `switchconfigvalues.sh` in the website folder. Make sure you have the client id and app id set as env variables.