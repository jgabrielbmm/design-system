import * as S from './styles'
import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'

export interface CheckboxProps
  extends ComponentProps<typeof S.CheckBoxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <S.CheckBoxContainer {...props}>
      <S.CheckBoxIndicator asChild>
        <Check weight="bold" />
      </S.CheckBoxIndicator>
    </S.CheckBoxContainer>
  )
}
