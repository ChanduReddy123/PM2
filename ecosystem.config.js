module.exports = {
  apps : [
    {
    name: 'API',
    script: 'index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 4,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    log_date_format: "YYYY-MM-DD HH:mm Z",
    out_file: "./output.log",
    env: {
      "PORT": 3000,
      "NODE_ENV": "development"
    },
    env_production: {
      "PORT": 3001,
      "NODE_ENV": "Production"
    }
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '54.188.157.58',
      ref  : 'origin/master',
      repo : 'git@github.com:ChanduReddy123/PM2.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
} ;
