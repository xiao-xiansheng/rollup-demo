import NodePath from "path";
import RollupTypescript from "rollup-plugin-typescript2";
import RollupJson from "rollup-plugin-json";
import RollupCommonjs from "rollup-plugin-commonjs";
import Package from "../package.json";

const resolveFile = (path) => NodePath.resolve(__dirname, "..", path);

const externalPackages = ["react", "react-dom"];

export default {
  input: resolveFile(Package.source),
  output: [
    {
      file: resolveFile(Package.main),
      format: "cjs",
      sourcemap: true,
    },
    {
      file: resolveFile(Package.module),
      format: "es",
      sourcemap: true,
    },
  ],

  external: externalPackages,
  plugins: [
    RollupCommonjs({
      include: /\/node_modules\//,
    }),
    RollupJson(),
    RollupTypescript({
      tsconfig: resolveFile("tsconfig.rollup.json"),
    }),
  ],
};
