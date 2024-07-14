import type { Plugin } from "esbuild";

export default function externalizeNonWorkspaceDependencies(
  workspacePrefix: string
): Plugin {
  return {
    name: "externalize-non-workspace-dependencies",
    setup(build) {
      build.onResolve({ filter: /(.*)/ }, (args) => {
        if (!args.path.startsWith(".") && !args.path.startsWith(workspacePrefix)) {
          return { path: args.path, external: true };
        }
      });
    },
  };
}