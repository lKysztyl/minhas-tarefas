import Tarefas from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Castelo de Vidro',
    descricao: 'Livro de Fantasia',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Duna',
    descricao: 'Livro de Fantasia',
    prioridade: 'urgente',
    status: 'pendente'
  },
  {
    titulo: 'Rust',
    descricao: 'Livro de Rust',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;cateforia&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefas
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
            titulo={t.titulo}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
