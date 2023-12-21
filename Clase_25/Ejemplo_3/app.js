function listNumbers(...numbers) {
  const types = numbers.map((num) => typeof num);

  if (
    types.includes("string") ||
    types.includes("boolean") 
  ) {
    const error = new Error("Invalid parameters");
    error.types = types;
    throw error;
  }

  return numbers;
}

process.on("uncaughtException", (err) => {
  if (err.types) {
    console.error(`${err.message}: ${err.types}`);
    process.exitCode = -4;
  } else {
    throw err;
  }
});

try {
  const result = listNumbers(1, 2, "a", true);
  console.log("Result:", result);
} catch (error) {
  console.error("Caught an exception:", error.message);
  throw error;
}
