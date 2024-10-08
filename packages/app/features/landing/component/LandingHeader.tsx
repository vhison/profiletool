import Image from 'next/image'
import { ImageLi, LiButtons, LiTheme } from '@my/ui/components'
import { AnimatePresence, Button, Text, useMedia, XStack, YStack } from '@my/ui/src'

export const LandingHeader = (props) => {
  const { onExplore } = props
  const media = useMedia()
  return (
    <YStack
      maxWidth={1455}
      padding={20}
    >
      <YStack
        width={'100%'}
        $sm={{ alignItems: 'center' }}
      >
        <ImageLi theme={LiTheme.white} />
      </YStack>
      <XStack
        f={1}
        flexWrap="wrap"
        width={'100%'}
        justifyContent="space-between"
      >
        <YStack
          flexBasis={'40%'}
          $md={{ flexBasis: '100%' }}
          paddingVertical={150}
          $sm={{ paddingVertical: 80 }}
        >
          <YStack width={'100%'}>
            <Text
              fontSize={'$5'}
              fontFamily="$satoshiBold"
              color="#9dabc8"
            >
              Powered by award-winning AI
            </Text>
          </YStack>
          <YStack f={1}>
            <Text
              fontSize={'$8'}
              $sm={{ fontSize: '$7' }}
              fontFamily="$satoshiBold"
              color="#000"
            >
              ​Unleash Your LinkedIn.
              <br />
              ​Scale Your Success.
              
            </Text>
          </YStack>
          <YStack space={30}>
            <YStack>
              <Text
                fontSize={'$4'}
                fontFamily="$satoshiRegular"
                $sm={{ lineHeight: 30 }}
                color="#000"
              >
                LiTools: Your pathway to targeted meetings with the prospects you're seeking. Level
                up your LinkedIn game and drive real results.
                
              </Text>
            </YStack>
            <AnimatePresence>
              <Button
                width={220}
                height={40}
                cursor="pointer"
                animation="bouncy"
                hoverStyle={{ y: -5, cursor: 'pointer' }}
                exitStyle={{ y: 0, cursor: 'pointer' }}
              >
                <LiButtons
                  label="See your score"
                  als="center"
                  onClick={() => onExplore()}
                />
              </Button>
            </AnimatePresence>

          
          </YStack>
        </YStack>
        {!media.sm && (
          <YStack
            flexBasis={'50%'}
            $md={{ flexBasis: '100%' }}
          >
            <YStack f={1}>
              <Image
                alt="headerbg.png"
                src={require('./headerbg.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 20,
                }}
              />
            </YStack>
          </YStack>
        )}
      </XStack>
    </YStack>
  )
}
