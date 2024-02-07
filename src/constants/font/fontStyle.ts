const fontStyleList = [
  'h1',
  'h2',
  'h3',
  'xLarge',
  'large',
  'default',
  'small',
  'xSmall',
  'mini',
] as const;
export type FontStyleUnion = (typeof fontStyleList)[number];
export const fontStyles = {
  mini: 10,
  xSmall: 11,
  small: 12,
  default: 14,
  large: 16,
  xLarge: 17,
  h3: 20,
  h2: 24,
  h1: 30,
};
