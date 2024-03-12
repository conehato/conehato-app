import { Children, useEffect, useMemo, useRef } from 'react';
import { ColorValue, Text as _Text, TextProps as _TextProps, Platform } from 'react-native';

import {
  colors,
  FontWeightUnion,
  FontStyleUnion,
  fontWeightToFamily,
  fontStyles,
} from '@/constants';

export interface TextProps extends _TextProps {
  fixed?: boolean;
  color?: ColorValue;
  underline?: boolean;
  enableNormalize?: boolean;

  /**
   * @default 'medium'
   * @description
   * - thin: 250(~Thin)
   * - light: 300(~Light)
   * - medium: 400(~Regular)
   * - semiBold: 500(~Medium)
   * - bold: 700(~Bold)
   */
  fontWeight?: FontWeightUnion;

  /**
   * @default 'default'
   * @description
   * - mini: 10
   * - xSmall: 11
   * - small: 12
   * - default: 14
   * - large: 16
   * - xLarge: 17
   * - h3: 20
   * - h2: 24
   * - h1: 30
   */
  fontStyle?: FontStyleUnion;
}

export function Text({
  fixed = true,
  children,
  underline,
  style,
  enableNormalize,
  color,
  fontStyle = 'default',
  fontWeight = 'medium',
  ...props
}: TextProps) {
  const textStyle = useMemo(() => {
    const fontWeightStyle = { fontFamily: fontWeightToFamily[fontWeight] };
    return [{ fontSize: fontStyles[fontStyle] }, fontWeightStyle];
  }, [fontStyle, fontWeight]);

  const normalizedChildren = useMemo(
    () =>
      enableNormalize
        ? Children.toArray(children).map((child) => {
            if (typeof child === 'string') {
              return child.normalize('NFC');
            } else {
              return child;
            }
          })
        : children,
    [children, enableNormalize]
  );

  const ref = useRef<_Text>(null);

  useEffect(() => {
    if (props.numberOfLines !== 1 || Platform.OS !== 'web') return;
    const text = ref.current as unknown as HTMLDivElement;

    if (text.offsetWidth < text.scrollWidth && text.textContent) {
      text.setAttribute('title', text.textContent);
    } else {
      text.removeAttribute('title');
    }
  });

  return (
    <_Text
      {...props}
      ref={ref}
      style={[
        textStyle,
        { color: color || colors.gray.dark },
        style,
        underline && { textDecorationLine: 'underline' },
      ]}
      allowFontScaling={!fixed}
    >
      {normalizedChildren}
    </_Text>
  );
}
