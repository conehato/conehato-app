import * as fontList from './fontList';

type FontList = keyof typeof fontList;
type FontInfo = NonNullable<
  FontList extends `${infer FontFamily}_${infer FontWeight}`
    ? { FontFamily: FontFamily; FontWeight: FontWeight }
    : never
>;

export type FontFamilyUnion = FontInfo['FontFamily'];
export type FontWeightUnion = FontInfo['FontWeight'];

export const fonts = fontList;

export const fontWeightToFamily = Object.keys(fonts).reduce(
  (prev, curr) => {
    return { ...prev, [curr.split('_')[1]]: curr };
  },
  {} as Record<FontWeightUnion, FontFamilyUnion>
);
