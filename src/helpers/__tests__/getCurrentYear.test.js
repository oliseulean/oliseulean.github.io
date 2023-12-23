import { getCurrentYear} from '../getCurrentYear';
import { describe, expect, it } from 'vitest';

describe('getCurrentYear', () => {
  it('should return the current year', () => {
    const result = getCurrentYear();
    const currentYear = new Date().getFullYear();
    expect(result).toEqual(currentYear);
  });
});