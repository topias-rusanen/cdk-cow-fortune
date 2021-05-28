#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { CowFortuneStack } from "../lib/cow-fortune-stack";

const app = new cdk.App();
new CowFortuneStack(
  app,
  "CowFortuneStack",
  app.node.tryGetContext("schedule"),
  app.node.tryGetContext("slack-webhook-url"),
  {
    description:
      "Source available in: https://github.com/topias-rusanen/cdk-cow-fortune",
  }
);
