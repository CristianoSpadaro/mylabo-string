const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('./stringUtils');

describe('reverseString', () => {
    test('should reverse a standard string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('should handle an empty string', () => {
        expect(reverseString('')).toBe('');
    });

    test('should handle a single character string', () => {
        expect(reverseString('a')).toBe('a');
    });
});

describe('isPalindrome', () => {
    test('should return true for a palindrome string', () => {
        expect(isPalindrome('madam')).toBe(true);
    });

    test('should return false for a non-palindrome string', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    test('should ignore spaces and case sensitivity', () => {
        expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    });

    test('should handle an empty string', () => {
        expect(isPalindrome('')).toBe(true);
    });
});

describe('truncateString', () => {
    test('should truncate a string longer than maxLength', () => {
        expect(truncateString('hello world', 5)).toBe('hello...');
    });

    test('should return the original string if it is shorter than maxLength', () => {
        expect(truncateString('hello', 10)).toBe('hello');
    });

    test('should handle an empty string', () => {
        expect(truncateString('', 5)).toBe('');
    });

    test('should handle maxLength of 0', () => {
        expect(truncateString('hello', 0)).toBe('...');
    });
});

describe('countCharacters', () => {
    test('should count characters in a standard string', () => {
        expect(countCharacters('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    });

    test('should handle an empty string', () => {
        expect(countCharacters('')).toEqual({});
    });

    test('should handle a string with repeated characters', () => {
        expect(countCharacters('aaa')).toEqual({ a: 3 });
    });

    test('should handle special characters and spaces', () => {
        expect(countCharacters('a b!')).toEqual({ a: 1, ' ': 1, b: 1, '!': 1 });
    });
});