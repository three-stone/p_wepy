const path = require('path')
const LessPluginAutoPrefix = require('less-plugin-autoprefix')

var prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  build: {
    web: {
      htmlTemplate: path.join('src', 'index.template.html'),
      htmlOutput: path.join('web', 'index.html'),
      jsOutput: path.join('web', 'index.js')
    }
  },
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      components: path.join(__dirname, 'src/components'),
      apis: path.join(__dirname, 'src/apis'),
      utils: path.join(__dirname, 'src/utils'),
      config: path.join(__dirname, 'src/config'),
      store: path.join(__dirname, 'src/store'),
      mixins: path.join(__dirname, 'src/mixins'),
      internal: path.join(__dirname, 'src/internal')
      // '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: true,
      plugins: [new LessPluginAutoPrefix({
        browsers: ['Android >= 2.3', 'Chrome > 20', 'iOS >= 6']
      })]
    },
    /* sass: {
      outputStyle: 'compressed'
    }, */
    babel: {
      sourceMap: true,
      presets: [
        'es2015',
        'stage-1',
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
        'syntax-export-extensions'
      ]
    }
  },
  plugins: {
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

if (prod) {
  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  }
}
