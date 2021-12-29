let memo: number[] = [];

export const fibo = (n: number): number => {
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 1) {
    return n;
  }
  return memo[n] = fibo(n - 1) + fibo(n - 2);
};
