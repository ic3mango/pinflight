const mongoose = require('mongoose');

require('./models/User');
require('./services/passportSetup');

const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;

const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serving listening on port ${PORT}`);
});
