import { createFont, createTamagui, GenericFont } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { createMedia } from '@tamagui/react-native-media-driver'
import { shorthands } from '@tamagui/shorthands'
import { tokens } from '@tamagui/themes'
import { animations } from './animations'
import { LiThemes } from './ThemeLi'

const fontConfig: GenericFont = {
  size: {
    4: 10,
    5: 12,
    6: 15,
    7: 18,
    8: 20,
    9: 24,
    10: 32,
    12: 40,
    14: 48,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    6: '400',
    7: '700',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
  // these will be used when run in native mode.
  face: {
    300: { normal: 'Satoshi-Light' },
    400: { normal: 'Satoshi-Regular' },
    500: { normal: 'Satoshi-Medium' },
    600: { normal: 'Satoshi-Medium' },
    700: { normal: 'Satoshi-Bold' },
    800: { normal: 'Satoshi-Bold' },
    900: { normal: 'Satoshi-Black' },
  },
}
const satoshiBold = createFont({
  family: 'Satoshi-Bold',
  ...fontConfig,
})
const satoshiLight = createFont({
  family: 'Satoshi-Light',
  ...fontConfig,
})
const satoshiRegular = createFont({
  family: 'Satoshi-Regular',
  ...fontConfig,
})
const satoshiMedium = createFont({
  family: 'Satoshi-Medium',
  ...fontConfig,
})
const headingFont = createInterFont({
  size: {
    6: 15,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    6: '400',
    7: '700',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
  face: {
    700: { normal: 'InterBold' },
  },
})

const bodyFont = createInterFont(
  {
    face: {
      700: { normal: 'InterBold' },
    },
  },
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  }
)

export const config = createTamagui({
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
    satoshiBold: satoshiBold,
    satoshiLight: satoshiLight,
    satoshiMedium: satoshiMedium,
    satoshiRegular: satoshiRegular,
  },
  themes: LiThemes,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})
