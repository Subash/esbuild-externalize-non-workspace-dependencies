module.exports = function externalizeNonWorkspaceDependencies(workspacePrefix) {
  return {
    name: 'externalize-non-workspace-dependencies',
    setup(build) {
      build.onResolve({ filter: /(.*)/ }, (args) => {
        if (!args.path.startsWith('.') && !args.path.startsWith(workspacePrefix)) {
          return { path: args.path, external: true };
        }
      });
    }
  };
};
