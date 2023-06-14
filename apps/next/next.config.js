const withFonts = require('next-fonts')
const { withExpo } = require('@expo/next-adapter')
const withImages = require('next-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'moti',
    'app',
    'react-native-reanimated',
    'nativewind',
    'react-native-gesture-handler',
    '@react-native/assets',
    'react-native-svg',
    'lottie-react-native',
    'lottie-web',
    'lottie-react',
    '@bounceapp/lottie',
    '@expo/vector-icons',
    'expo-modules-core',
    'expo-asset',
    'expo-constants',
    'expo-file-system',
    'expo-font',
    '@gorhom/portal',
  ],
}

module.exports = withExpo(withFonts(nextConfig))
