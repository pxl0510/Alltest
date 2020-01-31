 
  const { override, fixBabelImports, addLessLoader,addWebpackPlugin, addDecoratorsLegacy } = require('customize-cra');
  const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
  const theme=require("./theme.js")
 
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme,
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addDecoratorsLegacy()
);
