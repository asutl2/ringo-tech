// next.config.js
module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/blogs',
          permanent: true,
        },
      ];
    },
  };
  