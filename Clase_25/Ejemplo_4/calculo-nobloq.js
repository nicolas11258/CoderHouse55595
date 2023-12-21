let result = 0;
for (let i = 0; i <= 100000; i++) {
  result += i;
}

process.send(result);
process.exit();
