import getAzure from "../../src/";

describe("Azure", () => {
  it("should work", () => {
    expect(getAzure()).to.equal("azure");
  });
});
