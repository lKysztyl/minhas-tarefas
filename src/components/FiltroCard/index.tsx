import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

<<<<<<< HEAD
const FiltroCard = ({ contador, ativo, legenda }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)

export default FiltroCard
