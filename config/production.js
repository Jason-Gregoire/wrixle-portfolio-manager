module.exports = {
  // Database Configuration
  database: {
    host: 'production-db.example.com',
    port: 5432,
    username: 'your-username',
    password: 'your-password',
    database: 'wrixle_production',
  },

  // API Configuration
  api: {
    baseURL: 'https://api.wrixle.com',
    timeout: 5000,
    apiKey: 'your-api-key',
  },

  // Logging Configuration
  logging: {
    level: 'info',
    file: '/var/log/wrixle.log',
  },

  // Other Configuration Options
  // ...
};
