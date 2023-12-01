import styled from 'styled-components'

import { Props } from '.'

type PropsSemContadorELegenda = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemContadorELegenda>`
  padding: 8px;
  color: ${(props) => (props.ativo ? '#1E90FF' : '#5e5e5e')};
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  border-radius: 8px;
`

export const Contador = styled.div`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.div`
  font-size: 14px;
`
