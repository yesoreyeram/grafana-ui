import webpack, { Configuration } from 'webpack';
import { mergeWithRules } from 'webpack-merge';
import path from 'path';
import grafanaConfig from './.config/webpack/webpack.config';

const config = async (env: any): Promise<Configuration> => {
  const baseConfig = await grafanaConfig(env);
  const customConfig = {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
    resolve: {
      alias: {
        '@/components': path.resolve(process.cwd(), 'src/components/'),
      },
    },
  };
  return mergeWithRules({
    module: {
      rules: {
        exclude: 'replace',
      },
    },
  })(baseConfig, customConfig);
};

export default config;
