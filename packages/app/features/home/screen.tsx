import {
  Anchor,
  Button,
  H1,
  H2,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useRouter } from 'next/router'

export function HomeScreen() {
  const router = useRouter()

  const openUserLink = async () => {
    router.push(`/user/vinay`)
  }
  return (
    <YStack f={1} ai="center" p="$4" gap="$4">
      <YStack>
        <H2> Vinay Sharma </H2>
      </YStack>
      <YStack>
        <Paragraph>
          Software Engineer | React Native | React | Next | AWS | Mobx | Redux | Responsive UI |
          GitHub | Full stack Developer
        </Paragraph>
      </YStack>
      <YStack gap="$4" bc="$background" justifyContent="center" flex={1}>
        <H1 ta="center"> Be online and grow rapidly. </H1>
        <Paragraph ta="center">
          Skills to create customized websites for small businesses and start-ups to be a part of
          successful online platforms.
        </Paragraph>

        <Separator />
        <Paragraph ta="center">
          Made by{' '}
          <Anchor color="$color12" href="https://twitter.com/vhison781" target="_blank">
            @vhison781
          </Anchor>
          {/* ,{' '}
          <Anchor
            color="$color12"
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            give it a ⭐️
          </Anchor> */}
        </Paragraph>
      </YStack>

      {/* <XStack>
        <Button onPress={() => openUserLink()}>Link to user</Button>
      </XStack> */}

      {/* <SheetDemo /> */}
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
