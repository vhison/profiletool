import { XStack, YStack } from '@my/ui'
import { Header, ImageLi, LiTheme } from '@my/ui/components'
import { LandingHeader } from './component'

export function LandingScreen() {
  return (
    <YStack
      f={1}
      bc="$sectionblue"
      width={'100%'}
      alignItems="center"
      paddingTop={40}
      gap={30}
      $sm={{ paddingTop: 20 }}
    >
      <LandingHeader
        onExplore={() => null}        
        isShare={false}
        onClick={() => null}
      />
      <XStack
        f={1}
        flexWrap="wrap"
        width={'100%'}
        justifyContent="space-between"
        alignItems="center"
        gap={20}
      >
        <Header
          onReAnalyze={function (): void {
            throw new Error('Function not implemented.')
          }}
          onSignOut={function (): void {
            throw new Error('Function not implemented.')
          }}
          onReScore={function (): void {
            throw new Error('Function not implemented.')
          }}
          onSwitchTheme={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
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
