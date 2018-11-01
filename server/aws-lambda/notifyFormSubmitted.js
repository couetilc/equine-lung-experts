const AWS = require('aws-sdk');
const SNS = new AWS.SNS();

exports.handler = async (event) => {
    console.log(JSON.stringify(event));

	const form = JSON.parse(event.body);

	const email_subject = `[${form.subject}] ${form.fullname}`;
	const email_body = `Name: ${form.fullname}
Email: ${form.email}
Phone: ${form.phone}
Subject: ${form.subject}
		
${form.message}

${event.requestContext.requestTime}`;

	const mail_param = {
        TopicArn: 'arn:aws:sns:us-east-1:309522472650:equinelungexperts_contact-form-submitted',
        Subject: email_subject,
        Message: email_body
	};

	const client_ok_response = {
		statusCode: 200,
		body: event.body
	};

	const client_error_response = {
		statusCode: 502,
		body: event.body
	};

    return SNS.publish(mail_param).promise()
		.then(sns_response => {
			console.log(JSON.stringify(sns_response));
			return client_ok_response;
		})
		.catch(error => {
			console.log(JSON.stringify(error), JSON.stringify(error.stack));
			return client_error_response;
		});
};
