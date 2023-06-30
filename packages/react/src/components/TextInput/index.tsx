import * as S from './styles'
import { ComponentProps, forwardRef, ElementRef } from 'react'

export interface TextInputProps extends ComponentProps<typeof S.Input> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof S.Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <S.TextInputContainer>
        {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
        <S.Input ref={ref} {...props} />
      </S.TextInputContainer>
    )
  },
)
TextInput.displayName = 'TextInput'
