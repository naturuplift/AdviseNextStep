const { loadModel } = require('../../models/adviceModel');

exports.getAdvice = async (req, res) => {
  try {
    const model = await loadModel();
    // Assume the model takes some user input and returns advice
    const input = tf.tensor([req.body.userInput]); // Simplified for example
    const [advice] = model.predict(input).dataSync();
    res.json({ success: true, advice });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error getting advice.' });
  }
};
