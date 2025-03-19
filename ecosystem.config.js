module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: "max",
      exec_mode: "cluster",
      watch: false,
      env: {
        PORT: 4200,
        NODE_ENV: "production",
      },
    },
  ],
}

