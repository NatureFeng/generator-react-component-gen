'use strict';

module.exports = function(appname, type) {
  var common = [
    {
      type: 'input',
      name: 'componentName',
      message: 'component name',
      default: appname.split(' ').join('-')
    },
    {
      type: 'input',
      name: 'version',
      message: '版本号',
      default: '0.0.1'
    },
    {
      type: 'input',
      name: 'author',
      message: '作者',
      default: 'name@gamil.com'
    },
    {
      type: 'input',
      name: 'description',
      message: '详细描述',
      default: '组件说明'
    },
    {
      type: 'input',
      name: 'license',
      message: '证书类型',
      default: 'MIT'
    },
    {
      type: 'input',
      name: 'repositoryUrl',
      message: '仓库地址',
      default: ''
    }
  ];
  return {
    prompt: common,
    fn: function(ctx, done) {
    return function(data) {
      var dirs = ['demo', 'src'];
      dirs.forEach(function(val) {
        ctx.directory(val, val);
      });
      ctx.template('package.json', 'package.json', data);
      ctx.template('server.js', 'server.js');
      ctx.template('index.html', 'index.html');
      ctx.template('LICENSE', 'LICENSE');
      ctx.template('webpack.config.js', 'webpack.config.js');
      done();
    };
  }
  };
};
