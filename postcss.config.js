/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

module.exports = {
    plugins: [
      require('autoprefixer')({
        grid: true,
        overrideBrowserslist: [
          '> 1%',
          'last 5 versions',
          'Firefox >= 45',
          'ios >= 8',
          'ie >= 10'
        ]
      })
    ]
}