import './App.css'
import Header from './components/Header'
import Container from './components/Container'
import Title from './components/Title'
import Footer from './components/Footer'
import DataTable from './Tabela'
import useQueryData from './useQueryData'
import Graph from './components/Graph'
import useProfessionalsData from './useProfessionalsData'
import Assessment from './components/Assessment'
import Button from './components/Button'
import Subtitle from './components/Subtitle'

function App() {
    const { data: queryData, error: queryError } = useQueryData()
    const { data: professionalData, error: professionalError } = useProfessionalsData()

    if (queryError || professionalError) {
        console.log('Ocorreu um erro na requisição!')
    }

    return (
        <>
            <Header />
            <Container>
                <Title>Área administrativa</Title>
                <Button>Cadastrar especialista</Button>
                <Title image="query">Consultas do dia</Title>
                <DataTable querys={queryData} />
                <Title image="graph">Consultas mensais por especialista</Title>
                <Subtitle>Dezembro/22</Subtitle>
                <Graph querys={queryData} professionals={professionalData} />
                <Assessment professionals={professionalData} />
            </Container>
            <Footer />
        </>
    )
}

export default App
