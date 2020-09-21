
let spin = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r\\   "];      
let n = 100
for (const char of spin) {
  n += 200;
  setTimeout(() => {
      process.stdout.write(char);
    }, 200 + n);
};
