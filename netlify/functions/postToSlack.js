const axios = require('axios');

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  const webhookUrl = process.env.SLACK_WEBHOOK_URL || ''

  try {
    const response = await axios.post(webhookUrl, { text: message }, {
      headers: { 'Content-Type': 'application/json' },
    });

    return {
      statusCode: response.status,
      body: JSON.stringify({ message: 'Message posted successfully' }),
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
