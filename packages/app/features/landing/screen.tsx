import { XStack, YStack } from '@my/ui'
import { ImageLi, LiTheme } from '@my/ui/components'

export function LandingScreen() {
  return (
    <YStack
      f={1}
      bc="$background"
      width={'100%'}
      alignItems="center"
      paddingTop={40}
      gap={30}
      $sm={{ paddingTop: 20 }}
    >
      <XStack
        f={1}
        flexWrap="wrap"
        width={'100%'}
        justifyContent="space-between"
        alignItems="center"
        gap={20}
      >
        <YStack
          flexBasis={'45%'}
          $sm={{ flexBasis: '100%' }}
          alignItems="flex-start"
        >
          <ImageLi theme={LiTheme.white} />
        </YStack>
      </XStack>
    </YStack>
  )
}
