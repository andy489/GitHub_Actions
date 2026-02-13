const core = require('@actions/core')
// const github = require('@actions/github')
const exec = require('@actions/exec')

async function run() {
    // 1) Gove some input values
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });

    // 2) Upload files
    const s3Uri = `s3://${bucket}`
    AWS_ACCESS_KEY_ID=AKIAWRU4UZYWB266LQXD
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

    core.notice('Hello from my custom JavaScript Action!');
}

run();