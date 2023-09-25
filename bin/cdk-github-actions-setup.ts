#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { CdkGitHubActionRoleStack } from '../lib/cdk-github-actions-setup-stack';


const app = new App();

new CdkGitHubActionRoleStack(app, 'CdkGitHubActionRoleStack', {
    repos: app.node.tryGetContext('repos'),
});

app.synth();