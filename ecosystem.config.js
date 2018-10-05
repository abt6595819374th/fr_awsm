module.exports = {
  apps : [{
    name: 'API',
    script: 'server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '400M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      "PORT": 8000,
      "NODE_ENV": "production",
    }
  }]
};
