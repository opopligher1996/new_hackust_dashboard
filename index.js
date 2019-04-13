require( "@babel/register" )( {
    presets: ["@babel/preset-env"],
    plugins: [
       '@babel/syntax-dynamic-import',
       'dynamic-import-node',
       'react-loadable/babel'
    ]
} );
//https://github.com/webpack/webpack/issues/1754
require.extensions['.scss'] = () => {
  return;
};
require.extensions['.css'] = () => {
  return;
};
require.extensions['.less'] = () => {
  return;
};
require.extensions['.svg'] = () => {
  return;
};
require( "./src/server/server" );
