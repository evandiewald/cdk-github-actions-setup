import * as cdk from 'aws-cdk-lib';
import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from 'constructs';
import { GitHubActionRole } from "cdk-pipelines-github";
import * as ssm from 'aws-cdk-lib/aws-ssm';


export interface CdkGitHubActionRoleStackProps extends StackProps {
  repos: string[],
}

export class CdkGitHubActionRoleStack extends Stack {
  constructor(scope: Construct, id: string, props: CdkGitHubActionRoleStackProps) {
    super(scope, id, props);

    const provider = new GitHubActionRole(this, 'github-action-role', {
      repos: props.repos,
    });

    new ssm.StringParameter(this, 'cdk-github-action-role-arn-param', {
      parameterName: 'cdk-github-action-role-arn',
      description: 'Role ARN for Github Actions role created by cdk-pipelines-github.',
      stringValue: provider.role.roleArn,
    });

  }
}


