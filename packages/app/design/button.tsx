import { PressableProps, Pressable as ReactNativePressable } from 'react-native'
import { styled } from 'nativewind'
import { Text } from './typography'

const Pressable = styled(ReactNativePressable)

export interface ButtonProps extends PressableProps {
  text: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md'
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: string
}

export const Button = ({
  text,
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) => {
  return (
    <Pressable
      className={`${
        className || ''
      } text-brand flex flex-1 flex-row items-center justify-center gap-2 rounded border px-4 py-2 text-sm font-medium transition-all duration-200 hover:translate-y-[-3px] focus:outline-none ${
        variant === 'primary'
          ? 'bg-primary hover:shadow-primary-button'
          : 'bg-secondary'
      }`}
      {...rest}
    >
      <Text> {text} </Text>
    </Pressable>
  )
}

Button.displayName = 'Button'
