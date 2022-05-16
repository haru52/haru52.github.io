/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';
/* eslint-enable import/no-extraneous-dependencies */

const config: webpack.Configuration = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
    },
  },
});

export default config;
