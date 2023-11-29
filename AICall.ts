const express = require('express');
const OpenAI = require('openai');

const app = express();
const openai = new OpenAI(process.env.API_KEY);

app.get('/api/chat', async (req, res) => {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
    });

    res.json(chatCompletion);
});

app.listen(3000, () => console.log('Server listening on port 3000'));

fetch('http://localhost:3000/api/chat')
    .then(response => response.json())
    .then(data => console.log(data));


