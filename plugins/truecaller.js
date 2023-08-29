npm install whatsapp-web.js qrcode-terminal                                                                                                                                                          const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', (qr) => {
    // Generate and display QR code
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('WhatsApp Bot is ready to chat!');
});

client.initialize();
                                                                                                                                                                                                                                 npm install axios
                                                                                                                                                                                                      const axios = require('axios');

const GPT_API_KEY = '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';
const GPT_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

async function generateResponse(message) {
    const response = await axios.post(GPT_ENDPOINT, {
        messages: [{ role: 'system', content: 'You are a bot' }, { role: 'user', content: message }],
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GPT_API_KEY}`
        }
    });

    return response.data.choices[0].message.content;
}
                                                                                                                                                                                                                               client.on('message', async (message) => {
    if (message.fromMe) return;

    const userMessage = message.body;
    const response = await generateResponse(userMessage);

    // Send the GPT-generated response back to the user
    message.reply(response);
});
