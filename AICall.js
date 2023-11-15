require('dotenv').config();

const apiKey = process.env.API_KEY;

console.log(apiKey);

const OpenAI = require('openai');

const openai = new OpenAI(apiKey);

//test call to openai

async function main() {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
    });

    console.log(chatCompletion);
}

main();