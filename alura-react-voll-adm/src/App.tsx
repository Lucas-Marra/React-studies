import './App.css'
import Header from './components/Header'
import Container from './components/Container'
import Title from './components/Title'
import Footer from './components/Footer'
import DataTable from './Tabela'
import useQueryData from './useQueryData'
import Graph from './components/Graph'
import useProfessionalsData from './useProfessionalsData'

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
                <Title />
                <DataTable querys={queryData} />
                <Graph querys={queryData} professionals={professionalData} />
            </Container>
            <Footer />
        </>
    )
}

export default App
