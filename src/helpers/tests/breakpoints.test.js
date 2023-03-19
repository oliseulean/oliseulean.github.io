import { describe, expect, it } from 'vitest';
import breakpoints from '../breakpoints';

describe('breakpoints', () => {
  it('should have a screen-sm breakpoint of 480', () => {
    expect(breakpoints['screen-sm']).toBe('480');
  });

  it('should have a screen-md breakpoint of 768', () => {
    expect(breakpoints['screen-md']).toBe('768');
  });

  it('should have a screen-lg breakpoint of 1024', () => {
    expect(breakpoints['screen-lg']).toBe('1024');
  });

  it('should have a screen-xl breakpoint of 1200', () => {
    expect(breakpoints['screen-xl']).toBe('1200');
  });
});