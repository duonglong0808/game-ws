module.exports = {
  apps: [
    {
      name: 'game-dice-ws',
      script: 'dist/main.js',
      // autorestart: true,
      // watch: ['dist'],
      instances: 1,
      env: {
        NODE_ENV: 'development',
        PORT: 8089,
      },
    },
  ],
};
