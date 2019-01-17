module.exports = {
  port: process.env.PORT || 3000,
  mongo: {
    uri: process.env.DB_URI || 'mongodb://localhost/'
  },
  secret: {
    auth: process.env.AUTH_SECRET || 'Ew98SusSEEYef31'
  }
}
