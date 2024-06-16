const email = require('../helpers/email');
const Queue = require('bull');


const emailQueue = new Queue('emailQueue', {
     redis: { port: 6379, host: '127.0.0.1' }
}); // Specify Redis connection using object

emailQueue.process(async (job) => {
    //wait 5 seconds and send email
    setTimeout(async () => {
        await email(job.data);
    }, 5000);
})

module.exports= emailQueue;