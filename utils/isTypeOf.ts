export const isOfType =
  <TargetType>(boundary: readonly TargetType[]) =>
  (toTest: unknown): toTest is TargetType =>
    boundary.some((b) => b === toTest);
