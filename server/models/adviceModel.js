const tf = require('@tensorflow/tfjs');
// Load your pre-trained model
async function loadModel() {
  const model = await tf.loadLayersModel('file://path/to/your/model.json');
  return model;
}

module.exports = { loadModel };
