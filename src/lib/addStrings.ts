export function addNumberStrings(a: string, b: string, c: string, d: string, e: string, f: string): number {
  const numA = parseFloat(a);
  const numB = parseFloat(b);
  const numC = parseFloat(c);
  const numD = parseFloat(d);
  const numE = parseFloat(e);
  const numF = parseFloat(f);

  if (isNaN(numA) || isNaN(numB) || isNaN(numC) || isNaN(numD) || isNaN(numE) || isNaN(numF)) {
    throw new Error('Invalid number string');
  }

  return numA + numB + numC + numD + numE + numF;
}