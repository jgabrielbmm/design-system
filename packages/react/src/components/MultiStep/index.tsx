import * as S from './styled'
import { ComponentProps } from 'react'

export interface MultiStepProps
  extends ComponentProps<typeof S.MultiStepContainer> {
  size: number
  currentStep?: number
}
export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <S.MultiStepContainer>
      <S.Label>
        Passo {currentStep} de {size}
      </S.Label>

      <S.Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <S.Step key={step} active={currentStep >= step} />
        })}
      </S.Steps>
    </S.MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
