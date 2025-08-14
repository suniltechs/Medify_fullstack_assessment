const app = require('./app');
const { PORT } = require('./config/db');
const { sequelize } = require('./config/db');

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync(); // This creates the tables if they don't exist
    console.log('Database synchronized');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();