import { describe, expect, it } from 'vitest';

describe('Testing the color object', () => {
  it('should have an array of colors', () => {
    const colors = [
      {
        colorWebOrange: '#ffa700',
        colorMirage: '#1e293b',
        colorWhite: '#ffffff',
      },
    ];
    expect(colors).toBeInstanceOf(Array);
  });

  it('should have the correct keys in the color object', () => {
    const colors = [
      {
        colorWebOrange: '#ffa700',
        colorMirage: '#1e293b',
        colorWhite: '#ffffff',
      },
    ];
    const colorObject = colors[0];
    expect(Object.keys(colorObject)).toEqual(['colorWebOrange', 'colorMirage', 'colorWhite']);
  });

  it('should have the correct values in the color object', () => {
    const colors = [
      {
        colorWebOrange: '#ffa700',
        colorMirage: '#1e293b',
        colorWhite: '#ffffff',
      },
    ];
    const colorObject = colors[0];
    expect(colorObject.colorWebOrange).toEqual('#ffa700');
    expect(colorObject.colorMirage).toEqual('#1e293b');
    expect(colorObject.colorWhite).toEqual('#ffffff')
  });
});