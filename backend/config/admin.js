module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7ac5e30a084af660afccec905dcb042a'),
  },
});
