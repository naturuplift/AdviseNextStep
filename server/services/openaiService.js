// Include packages needed for this application
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
      temperature: 0.6, // Temperature controls the randomness of the response.
      // The higher the temp, the more creative responses.
      max_tokens: 200, // This sets the maximum number of tokens in the response.
      // A high level definition is that a token is equivalent to a word.
      top_p: 1.0, // This allows for a more diverse response if the number is higher.
      // This supposed to 'Control the diversity via nucleus sampling'
      // with: 1 = no sampling, the lower the value the more "focused" the response. 
      frequency_penalty: 0.0,// Helps reduce the chance of the model repeating
      // the same response.
      presence_penalty: 0.0, // This Encourages the model to introduce new
      // concepts as the user interacts with chatbot and doesn't repeat the same.
    });

    const recommendation = response.choices[0].message.content.trim();
    res.json({ recommendation });
  } catch (error) {
    console.error(`Error fetching advice: ${error}`);
    res.status(500).send('Failed to provide advice due to an internal error.');
  }
};