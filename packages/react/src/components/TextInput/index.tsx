import * as S from './styles'
import { ComponentProps } from 'react'

export interface TextInputProps extends ComponentProps<typeof S.Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <S.TextInputContainer>
      {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
      <S.Input {...props} />
    </S.TextInputContainer>
  )
}
