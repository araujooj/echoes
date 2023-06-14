import { H1, P, Text } from 'app/design/typography'
import { Row, Stack } from 'app/design/layout'
import { View } from 'app/design/view'
import { Button } from 'app/design/button'
import { Waves } from 'app/design/lottie'
import { Icon } from 'app/design/icon'

export function HomeScreen() {
  return (
    <>
      <Row className="flex-1 items-center">
        <View className="mr-auto p-6">
          <H1 className="text-white">
            Welcome to <Text className="text-accent">Echoes</Text>
          </H1>
          <View className="max-w-lg">
            <P className="text-left">
              Step into the new era of productivity with Echoes. Harness the
              power of your voice, transform your spoken words into organized
              notes, and watch as your thoughts materialize in Notion.
            </P>
            <P>
              {' '}
              Join us, and unlock the potential of your{' '}
              <Text className="font-bold">voice.</Text>
            </P>
          </View>
          <View className="h-[32px]" />
          <Row className="flex-wrap space-x-4">
            <Button text="Login" />
            <Button text="Signup" variant="secondary" />
          </Row>
        </View>
        <Waves />
      </Row>
      {/* <Stack className="flex w-screen justify-center">
        <Icon name="chevron-down" className="animate-bounce transition-all" />
        <P className="font-medium">Scroll to know more</P>
      </Stack> */}
    </>
  )
}
