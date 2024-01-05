import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'

import FiltroCard from '../../components/FiltroCard'
import { alterarTermo } from '../../store/reducers/filtros'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <S.Campo
        type="text"
        placeholder="Buscar"
        value={termo}
        onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
      />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="concluídas" contador={2} />
        <FiltroCard legenda="urgentes" contador={3} />
        <FiltroCard legenda="importantes" contador={4} />
        <FiltroCard legenda="normal" contador={5} />
        <FiltroCard legenda="todas" contador={10} ativo />
      </S.Filtros>
    </S.Aside>
  )
}
export default BarraLateral
