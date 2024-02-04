import { ResolveOptions } from "webpack";
import { IBuildOptions } from "./type/config";

export function buildResolvers(options: IBuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}