var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONDODB_URI = 'dev-link';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONDODB_URI = 'test-link';
}
