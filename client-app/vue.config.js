module.exports = {
  outputDir: '../backend-app/wwwroot',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/client-app/'
    : '/'
}