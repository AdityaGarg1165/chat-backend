module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fc8ad91fe22dff81940cd8a18a872f45'),
  },
});
