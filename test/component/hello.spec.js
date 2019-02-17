describe("Protractor", () => {
  it("should say hello world", async () => {
    await browser.get("/test/component/hello.fix.html");
    const container = await element(by.id("container"));
    const txt = await container.getText();
    expect(txt).to.equal("hello world");
  });
});
