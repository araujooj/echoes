import { H1, P, Text } from 'app/design/typography'
import { Stack } from 'app/design/layout'
import { View } from 'app/design/view'
import { Button } from 'app/design/button'

export function HomeScreen() {
  return (
    <View className="bg-brand flex-1 items-center justify-center p-3">
      <H1 className="text-white">Welcome to Echoes</H1>
      <View className="max-w-xl">
        <P className="text-center">
          Transform your audio into notes powered by AI.
        </P>
      </View>
      <View className="h-[32px]" />
      <Stack className="w-3/4 max-w-sm space-y-4">
        <Button text="Login" />
        <Text className="text-center text-white">Or</Text>
        <Button text="Signup" variant="secondary" />
      </Stack>
    </View>
  )
}
