# CDK Cow Fortunes

This project includes a Docker image and an AWS CDK application to push cow fortunes to a specified Slack webhook.

## How to run

The docker image is bundled with the application as a CDK asset. The CDK application expects two context parameters to be provided:

- `schedule`: A cron-style schedule with the following pattern `minute hour day month year`
  - For example `0 12 * * *` would execute every day at noon
- `slack-webhook-url`: The slack webhook URL where to post the cow fortune

To deploy the application, run

```
cdk deploy CowFortuneStack -c 'schedule=<cron-schedule>' -c 'slack-webhook-url=<url>'
```
