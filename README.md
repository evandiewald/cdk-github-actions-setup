# cdk-github-actions-setup

This CDK app and associated workflow manages a role that allows GitHub Actions workflows to authenticate with short-lived credentials via OIDC.

The `GitHubActionRole` construct comes from [cdk-pipelines-github](https://github.com/cdklabs/cdk-pipelines-github#githubactionrole-construct). It takes a list of repositories as an input, which are used to create the Trust policy for the role. That list of repos is defined as a CDK context variable (`context.repos`) in [`cdk.json`](cdk.json) so that it can be updated via normal code review and VCS. Once authenticated, you can assume the CDK roles that were created during bootstrapping to deploy new stacks. 

**Note:** This stack must be deployed from local initially to create the `GitHubActionRole`. However, once the role has been created, you should deploy any changes through the GitHub Actions workflow.

**To see an example of a stack / workflow that uses this role, check out the partner repository, [cdk-github-actions-sample](https://github.com/evandiewald/cdk-github-actions-sample).**
