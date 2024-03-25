import './App.css'
import Header from './components/Header'
import Container from './components/Container'
import Title from './components/Title'
import Footer from './components/Footer'
import DataTable from './Tabela'
import useQueryData from './useQueryData'

function App() {
    const { data, error } = useQueryData()

    return (
        <>
            <Header />
            <Container>
                <Title></Title>
                <DataTable querys={data}></DataTable>
            </Container>
            <Footer />
        </>
    )
}

export default App
