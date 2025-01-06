// Utility functions for password validation
export function validatePassword(password: string, previousPasswords: string[]): boolean {
  return !previousPasswords.includes(password);
}

// Helper to check if a string contains exactly N numbers
export function containsExactlyNNumbers(str: string, n: number): boolean {
  const matches = str.match(/\d/g);
  return matches ? matches.length === n : false;
}