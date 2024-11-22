const Jenkins = require('jenkins');
const dotenv = require('dotenv');

dotenv.config();

const userName = process.env.CIRCLECI_JENKINS_USER;
const token = process.env.CIRCLECI_JENKINS_TOKEN;

const url = `https://${userName}:${token}@jenkins-ci.optibus.com`;

const jenkins = new Jenkins({
  baseUrl: url,
});

const jobName = process.argv[2];

(async () => {
  try {
    console.log("Triggering job:", jobName);
    const queueItem = await jenkins.job.build({
      name: jobName,
      parameters: { FROM_CIRCLE: true},
    });
    console.log("Queue item:", queueItem);

    const info = await await jenkins.queue.item(queueItem);
    console.log(`Job triggered in the following URL: ${info.task.url}`);

  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})()