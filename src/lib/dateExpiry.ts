export function isLCNExpired(expirationDate: string): boolean {
  const today = new Date();
  const expiration = new Date(expirationDate);
  return expiration < today;
}
