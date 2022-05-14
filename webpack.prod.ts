/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';
/* eslint-enable import/no-extraneous-dependencies */

const config: webpack.Configuration = merge(common, {
  mode: 'production',
});

export default config;
