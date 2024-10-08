import { Button, Spinner, XStack, YStack } from '@my/ui'
import { LinearGradient } from '@tamagui/linear-gradient'

import { color } from '../../../theme'

interface LiButtonsPropsType {
  als?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | null | undefined
  mt?: number
  disabled?: boolean
  isLoading?: boolean
  label: string
  onClick: () => void
}

export const LiButtons = (props: LiButtonsPropsType) => {
  const { als, mt, disabled, label, onClick, isLoading } = props
  return (
    <XStack als={als} mt={mt}>
      {disabled ? (
        <Button
          disabled={disabled}
          onPress={() => onClick()}
          bc={disabled ? color.colorG : color.colorC}
          width={224}
          height={50}
          maxWidth={224}
          color={disabled ? color.colorF : color.white}
          hoverStyle={{ backgroundColor: color.colorF }}
          fontWeight="600"
          fontSize={'$6'}
          fontFamily="$satoshiMedium"
          borderRadius={5}
        >
          {label}
        </Button>
      ) : (
        <YStack>
          <LinearGradient
            maxWidth={224}
            width={224}
            height={50}
            colors={[`${color.colorC}`, `${color.colorB}`]}
            start={[1, 1]}
            end={[0, 0]}
            position="relative"
            borderRadius={5}
          />
          <Button
            iconAfter={() => (isLoading ? <Spinner size="small" color="#FFF" /> : null)}
            position="absolute"
            disabled={isLoading}
            onPress={() => onClick()}
            bc={'transparent'}
            width={224}
            height={50}
            maxWidth={224}
            color={disabled ? color.colorF : color.white}
            hoverStyle={{ backgroundColor: 'rgba(255,255,255, 0.3)' }}
            fontWeight="600"
            fontSize={'$6'}
            fontFamily="$satoshiMedium"
            borderRadius={5}
          >
            {label}
          </Button>
        </YStack>
      )}
    </XStack>
  )
}
