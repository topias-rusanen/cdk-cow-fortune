import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as DailyFortune from '../lib/daily-fortune-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new DailyFortune.DailyFortuneStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
