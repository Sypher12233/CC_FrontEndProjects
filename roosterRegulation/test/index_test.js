const assert = require("assert");
const Rooster = require("../index.js");

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      // Setup
      const expected = "cock-a-doodle-doo!";

      // Execute
      const result = Rooster.announceDawn();

      // Verify
      assert.ok(expected == result);
    });
  });

  describe(".timeAtDawn", () => {
    it("returns its argument as a string", () => {
      // Setup
      const expected = Rooster.timeAtDawn(6).toString();

      // Execute
      const result = Rooster.timeAtDawn(6);

      // Verify
      assert.strictEqual(expected, result);
    });

    it("throws an error if passed a number less than 0", () => {
      assert.throws(function() {
        Rooster.timeAtDawn(-1);
      }, RangeError);
    });

    it("throws an error if passed a number greater than 23", () => {
      assert.throws(() => {
        Rooster.timeAtDawn(24);
      }, RangeError);
    });
  });
});
