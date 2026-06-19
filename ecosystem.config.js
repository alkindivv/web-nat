module.exports = {
  apps: [
    {
      name: "natandkin",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: "9999",
        NEXT_PUBLIC_SITE_URL: "https://natandkind.de", // Ganti dengan domain Anda
      },
    },
  ],
};
