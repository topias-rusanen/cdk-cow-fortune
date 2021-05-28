import { Construct, Stack, StackProps } from "@aws-cdk/core";
import { ContainerImage } from "@aws-cdk/aws-ecs";
import { ScheduledFargateTask } from "@aws-cdk/aws-ecs-patterns";
import { Schedule } from "@aws-cdk/aws-applicationautoscaling";

export class CowFortuneStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    cronString: string,
    slackWebhookUrl: string,
    props?: StackProps
  ) {
    super(scope, id, props);

    const imageOptions = {
      image: ContainerImage.fromAsset("docker"),
      command: [slackWebhookUrl],
    };
    new ScheduledFargateTask(this, "Task", {
      schedule: this.getCronSchedule(cronString),
      scheduledFargateTaskImageOptions: imageOptions,
    });
  }

  getCronSchedule(cronStr: string): Schedule {
    const parts = cronStr.split(" ");
    return Schedule.cron({
      minute: parts[0],
      hour: parts[1],
      day: parts[2],
      month: parts[3],
      year: parts[4],
    });
  }
}
