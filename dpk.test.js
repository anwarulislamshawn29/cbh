const { deterministicPartitionKey } = require("./dpk");

const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  test("Should return the partitionKey if it exists in the event object", () => {
    const event = { partitionKey: "testKey" };
    expect(deterministicPartitionKey(event)).toBe("testKey");
  });

  test("Should return a sha3-512 hash of the event data if partitionKey does not exist in the event object", () => {
    const event = { data: "testData" };
    const data = JSON.stringify(event);
    const expectedHash = crypto.createHash("sha3-512").update(data).digest("hex");
    expect(deterministicPartitionKey(event)).toBe(expectedHash);
  });

  test("Should return a sha3-512 hash of the candidate if the length of the candidate is greater than MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: "a".repeat(257) };
    const candidate = event.partitionKey;
    const expectedHash = crypto.createHash("sha3-512").update(candidate).digest("hex");
    expect(deterministicPartitionKey(event)).toBe(expectedHash);
  });

  test("Should return TRIVIAL_PARTITION_KEY if event is undefined", () => {
    const event = undefined;
    expect(deterministicPartitionKey(event)).toBe("0");
  });
});