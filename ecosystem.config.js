module.exports = {
  apps : [
    {
    name: 'API',
    script: 'index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
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
      key: "/c/Users/chandrashekar.bekkem/Desktop/keys/ChanduOregon.pem",
      ref  : 'origin/master',
      "pre-setup": "mkdir /home/ubuntu/testing/fasak",
      // repo : 'git@github.com:ChanduReddy123/PM2.git',
      repo: "https://github.com/ChanduReddy123/PM2.git",
      ssh_options: "StrictHostKeyChecking=no",
      path : '/home/ubuntu/testing',
      'post-deploy' : 'npm install && pm2 start ecosystem.config.js --env production'
    }
  }
} ;
