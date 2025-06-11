// src/data/LCN/LCN_Data.ts
declare const require: {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ): {
    keys(): string[];
    <T = any>(id: string): { default: T };
  };
};

// Match only LCN_Data.ts files inside BATCH-XX folders
const modules = require.context(
  './',
  true,
  /^\.\/BATCH-\d+\/LCN_Data\.ts$/
);

// Load LCNs and create batch mapping
const lcnToBatch: Record<string, string> = {};

export const validLCNs: string[] = modules
  .keys()
  .flatMap((path) => {
    const batch = path.match(/^\.\/(BATCH-\d+)\//)?.[1]!;
    const lcnList = modules(path).default as string[];

    lcnList.forEach((lcn) => {
      lcnToBatch[lcn] = batch;
    });

    return lcnList;
  });

export { lcnToBatch };
export default validLCNs;
