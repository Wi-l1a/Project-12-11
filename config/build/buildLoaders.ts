import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOption } from './types/config';

export function buildLoaders({ isDev }: BuildOption): webpack.RuleSetRule[] {

    // const svgLoader = {
    //     test: /\.svg$/,
    //     use: [{
    //         loader: '@svgr/webpack',
    //         options: {
    //             icon: true,
    //             svgoConfig: {
    //                 plugins: [
    //                     {
    //                         name: 'convertColors',
    //                         params: {
    //                             currentColor: true,
    //                         }
    //                     }
    //                 ]
    //             }
    //         }
    //     }],
    // };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }


    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
            }
        }
    }

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        namedExport: false,
                        exportLocalsConvention: 'as-is',
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },
                },
            },
            "sass-loader",
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|webp|woff2|woff)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/images/[name][ext]'
        }
    };

    return [
        svgLoader,
        fileLoader,
        babelLoader,
        typescriptLoader,
        cssLoaders,

    ]
}
