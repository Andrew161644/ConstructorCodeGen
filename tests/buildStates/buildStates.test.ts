import assert from "assert/strict";
import test from "node:test";
import { buildStatesString } from "../../modules/buildStates/buildStates";
import { ComponentState } from "../../modules/buildStates/types";

test("build state and callback", () => {
  let buildResult: ComponentState = buildStatesString(
    "Comp",
    "string",
    "content",
    ""
  );
  let expactedResult: ComponentState = {
    setStateCallBack: "",
    stateString: "",
  };
  assert.strictEqual(buildResult, expactedResult);
});
