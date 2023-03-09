// Generated using webpack-cli https://github.com/webpack/webpack-cli
import path from "path";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const unlify = new UglifyJsPlugin();
const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src",
  output: {
    filename: "index-test.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    library: {
      library: "LIB",
      libraryTarget: "var",
    },
  },
  plugins: [unlify],
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
