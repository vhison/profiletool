import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { useRouter } from 'next/router'

export function UserDetailScreen() {
  const router = useRouter()
  const id = router.query.id 
  const goHome = async () => {
    router.push('/', undefined, { shallow: true })
  }
  return (
    <YStack f={1} jc="center" ai="center" gap="$4">
      <Paragraph ta="center" fow="700">{`User ID: ${id}`}</Paragraph>
      <Button onPress={() => goHome()} icon={ChevronLeft}>
        Go Home
      </Button>
    </YStack>
  )
}
