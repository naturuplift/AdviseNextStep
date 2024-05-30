// adviceController.js

import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `
You are a knowledgeable advisor who provides insightful and helpful advice formatted in Markdown. When presented with a question, analyze the context and suggest a comprehensive and thoughtful response.

Example session:
Question: How can I stay motivated to achieve my goals?

Answer: Staying motivated requires setting clear, achievable goals and breaking them down into smaller tasks. Here are some tips:
- **Set specific goals**: Clearly define what you want to achieve.
- **Create a plan**: Outline the steps needed to reach your goals.
- **Stay organized**: Use tools like to-do lists or digital planners.
- **Reward yourself**: Celebrate small victories to keep yourself motivated.
- **Stay positive**: Keep a positive mindset and remind yourself of your achievements.
`;

export const getAdviceFromOpenAI = async (req, res) => {
  try {
    const { question } = req.body;
    const userPrompt = `Question: ${question}\nAnswer in Markdown format:`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      max_tokens: 1000,
      
    });

    const recommendation = response.choices[0].message.content.trim();
    res.json({ recommendation });
  } catch (error) {
    console.error(`Error fetching advice: ${error}`);
    res.status(500).send('Failed to provide advice due to an internal error.');
  }
};
