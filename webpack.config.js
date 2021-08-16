module.exports = {
    // .... all your webpack config here after that add resolve
    resolve: {
      alias: {
        'pg-native': 'noop2',
        tedious: 'noop2',
        sqlite3: 'noop2',
        mysql2: 'noop2',
      },
    },
  };