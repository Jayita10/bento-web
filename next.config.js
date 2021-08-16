module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com']
  },
  resolve: {
    alias: {
      'pg-native': 'noop2',
      tedious: 'noop2',
      sqlite3: 'noop2',
      mysql2: 'noop2',
    },
  },
}
