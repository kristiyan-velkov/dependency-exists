// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [new UglifyJSPlugin()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
        options: {
          compilerOptions: {
            lib: ["ES2022", "DOM"],
            target: "ES2022",
            module: "ESNext",
            moduleResolution: "NodeNext",
            outDir: "./dist",
            declarationDir: "./dist/esm/types",
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".ts", ".jsx", ".js", "..."],
    fallback: {
      fs: false,
      os: false,
      path: false,
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
