const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
    const token = core.getInput('token');
    const owner = core.getInput('owner');
    const repo = core.getInput('repo');
    const issueNumber = core.getInput('issue_number');
    const uniqueIdentifier = `[^uniqueIdentifier]: ${core.getInput('uniqueIdentifier')}`;
    const body = `${core.getInput('body')}\n\n${uniqueIdentifier}`;

    core.debug(`uniqueIdentifier is ${uniqueIdentifier}`);

    const octokit = github.getOctokit(token);

    const comments = await octokit.rest.issues.listComments({
        owner,
        repo,
        issue_number: issueNumber,
    });

    const botComment = comments.data.find((v) => v.body.includes(uniqueIdentifier));

    if (botComment) {
        core.info('update comment successfully.');
        await octokit.rest.issues.updateComment({
            owner,
            repo,
            comment_id: botComment.id,
            body,
        });
    } else {
        core.info('create comment successfully.');
        await octokit.rest.issues.createComment({
            owner,
            repo,
            issue_number: issueNumber,
            body,
        });
    }
};

try {
    main();
} catch (err) {
    core.setFailed(err.message);
}
