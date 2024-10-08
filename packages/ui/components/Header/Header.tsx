// import { translate } from 'app/i18n'
// import { useStores } from 'app/models'
// import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
// import { useProSidebar } from 'react-pro-sidebar'
// import { RWebShare } from 'react-web-share'

import { Button, Text, useMedia, XStack, YStack } from '@my/ui'
import { LinearGradient } from '@tamagui/linear-gradient'
import { Menu, Share2 } from '@tamagui/lucide-icons'
import { useThemeSetting } from '@tamagui/next-theme'

// import { color } from '../../../theme'
// import { LoginProfile } from '../LoginProfile/LoginProfile'
// import { SideBarMenuItem } from '../SideBar/SideBar'
// import { ToggleTheme } from '../ToggleTheme/ToggleTheme'

interface HeaderProps {
  onReAnalyze(): void
  onSignOut(): void
  onReScore(): void
  onSwitchTheme(): void
  isShared?: boolean
  isAccount?: boolean
}

export const Header = (props: HeaderProps) => {
  const { isShared, isAccount, onSignOut, onReAnalyze, onSwitchTheme, onReScore } = props
  const media = useMedia()
  const router = useRouter()
  const { current, systemTheme } = useThemeSetting()
  const apptheme = current === 'system' ? systemTheme : current
  const isDark = apptheme === 'dark'

  return (
    <XStack
      width={'100%'}
      backgroundColor="$background"
      alignItems="center"
      justifyContent="center"
      paddingRight={20}
    >
      {isAccount && (
        <YStack
          flex={1}
          onPress={() => router.push(`/`)}
          cursor="pointer"
        >
          <Image
            alt="logo.png"
            src={
              isDark
                ? require('../../../assets/logosidebar.png')
                : require('../../../assets/logosidebarwhite.png')
            }
            width={139}
            height={26}
          />
        </YStack>
      )}
      {media.md && (
        <Button
          backgroundColor="$background"
          size={'$3'}
          icon={Menu}
          onPress={() => null}
          marginRight={20}
        />
      )}
      <YStack flex={1}>
        <Text
          textAlign="left"
          color="$blue11"
          fontSize={32}
          $xs={{ fontSize: 20 }}
          textTransform="capitalize"
        >
          Screen Name
        </Text>
      </YStack>
      <YStack
        flex={1}
        alignItems="flex-end"
      >
        <XStack alignItems="center"></XStack>
      </YStack>
    </XStack>
  )
}
