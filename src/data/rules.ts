import { Rule } from '../types';
import { containsExactlyNNumbers } from '../utils/passwordValidation';

export const rules: Rule[] = [
  {
    id: 1,
    description: "Password must contain at least 5 characters",
    validator: (password) => password.length >= 5
  },
  {
    id: 2,
    description: "Password must contain at least one uppercase letter",
    validator: (password) => /[A-Z]/.test(password)
  },
  {
    id: 3,
    description: "Password must contain at least one number",
    validator: (password) => /\d/.test(password)
  },
  {
    id: 4,
    description: "Password must contain at least one special character (!@#$%^&*)",
    validator: (password) => /[!@#$%^&*]/.test(password)
  },
  {
    id: 5,
    description: "Password must contain at least one lowercase letter",
    validator: (password) => /[a-z]/.test(password)
  },
  {
    id: 6,
    description: "Password must start with a special character",
    validator: (password) => /^[!@#$%^&*]/.test(password)
  },
  {
    id: 7,
    description: "Password must be exactly 12 characters long",
    validator: (password) => password.length === 12
  },
  {
    id: 8,
    description: "Password must contain a month of the year",
    validator: (password) => /january|february|march|april|may|june|july|august|september|october|november|december/i.test(password)
  },
  {
    id: 9,
    description: "Password must contain a mathematical symbol (+,-,*,/,%)",
    validator: (password) => /[+\-*/%]/.test(password)
  },
  {
    id: 10,
    description: "Password must contain a color (red, blue, green, etc.)",
    validator: (password) => /red|blue|green|yellow|purple|pink|orange|black|white|brown/i.test(password)
  },
  {
    id: 11,
    description: "Password must contain exactly three uppercase letters",
    validator: (password) => (password.match(/[A-Z]/g) || []).length === 3
  },
  {
    id: 12,
    description: "Password must contain a palindrome of at least 3 characters",
    validator: (password) => {
      for (let i = 0; i < password.length - 2; i++) {
        for (let j = i + 2; j < password.length; j++) {
          const substr = password.slice(i, j + 1);
          if (substr === substr.split('').reverse().join('')) return true;
        }
      }
      return false;
    }
  },
  {
    id: 13,
    description: "Password must contain a Roman numeral (I, V, X, L, C, D, M)",
    validator: (password) => /[IVXLCDM]/.test(password)
  },
  {
    id: 14,
    description: "Password must contain a happy emoji face :) or :-)",
    validator: (password) => /:\)|:-\)/.test(password)
  },
  {
    id: 15,
    description: "Password must contain a prime number",
    validator: (password) => /\b(2|3|5|7|11|13|17|19|23|29|31|37|41|43|47|53|59|61|67|71|73|79|83|89|97)\b/.test(password)
  },
  {
    id: 16,
    description: "Password must contain a chess piece name (king, queen, rook, bishop, knight, pawn)",
    validator: (password) => /king|queen|rook|bishop|knight|pawn/i.test(password)
  },
  {
    id: 17,
    description: "Password must contain a chemical element symbol",
    validator: (password) => /He|Li|Be|Ne|Na|Mg|Al|Si|Cl|Ar|Ca|Fe|Au|Ag|Cu|Zn|H|O|N|C|P|S|K/i.test(password)
  },
  {
    id: 18,
    description: "Password must contain a word that means 'big'",
    validator: (password) => /large|big|huge|giant|massive|enormous|colossal/i.test(password)
  },
  {
    id: 19,
    description: "Password must contain a unit of measurement",
    validator: (password) => /meter|gram|liter|inch|foot|yard|mile|pound|gallon|km|cm|mm|kg|ml|oz/i.test(password)
  },
  {
    id: 20,
    description: "Password must contain a programming language name",
    validator: (password) => /java|python|ruby|perl|swift|rust|go|cpp|javascript|typescript/i.test(password)
  },
  {
    id: 21,
    description: "Password must contain a complete English sentence with subject and verb",
    validator: (password) => /\b(I|you|he|she|it|we|they)\s+(am|is|are|was|were|have|has|had|do|does|did)\b/i.test(password)
  },
  {
    id: 22,
    description: "Password must contain a compass direction (N, S, E, W, NE, SW, etc.)",
    validator: (password) => /\b(N|S|E|W|NE|SE|SW|NW|North|South|East|West)\b/i.test(password)
  },
  {
    id: 23,
    description: "Password must contain a music note (do, re, mi, fa, sol, la, ti)",
    validator: (password) => /\b(do|re|mi|fa|sol|la|ti)\b/i.test(password)
  },
  {
    id: 24,
    description: "Password must contain a fruit name",
    validator: (password) => /apple|banana|orange|grape|mango|kiwi|peach|plum|cherry|pear/i.test(password)
  },
  {
    id: 25,
    description: "Password must be a valid URL (starting with http:// or https://)",
    validator: (password) => /^https?:\/\/\w+\.\w+/.test(password)
  },
  {
    id: 26,
    description: "Password must contain a valid IPv4 address",
    validator: (password) => /\b(?:\d{1,3}\.){3}\d{1,3}\b/.test(password)
  },
  {
    id: 27,
    description: "Password must contain a valid hex color code (#RRGGBB)",
    validator: (password) => /#[0-9A-Fa-f]{6}\b/.test(password)
  },
  {
    id: 28,
    description: "Password must contain a valid date (YYYY-MM-DD)",
    validator: (password) => /\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])/.test(password)
  },
  {
    id: 29,
    description: "Password must contain a valid time (HH:MM)",
    validator: (password) => /(?:[01]\d|2[0-3]):[0-5]\d/.test(password)
  },
  {
    id: 30,
    description: "Password must contain a valid email address",
    validator: (password) => /\b[\w.-]+@[\w.-]+\.\w+\b/.test(password)
  }
];