import { View } from 'app/design/view'
import { LottieView } from '@bounceapp/lottie'
import waves from './assets/waves.json'
import { styled } from 'nativewind'

const WavesView = styled(View, 'fixed top-0 right-0 w-[70vw] h-[100vh] z-[-1]')

export const Waves = () => (
  <WavesView>
    <LottieView
      autoPlay
      loop
      source={waves}
      style={{
        position: 'absolute',
        top: '-95vw',
        left: 0,
        right: '-40vw',
        bottom: 0,
      }}
    />
  </WavesView>
)
