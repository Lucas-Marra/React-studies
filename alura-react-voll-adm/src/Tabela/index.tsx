import {
    Paper,
    TableCell,
    TableContainer,
    TableHead,
    Table,
    TableRow,
    TableBody,
    tableCellClasses
} from '@mui/material'
import QueryData from '../types/QueryData'
import styled from 'styled-components'

const StyledCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: 'var(--azul-escuro)',
        fontSize: 18,
        fontWeight: 700,
        fontFamily: 'var(--fonte-principal)'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: 'var(--fonte-principal)'
    }
}))

const StyledLine = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        backgroundColor: 'var(--cinza-claro)',
        align: 'right'
    }
}))

export default function DataTable({ querys }: { querys: QueryData[] | null }) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela customizada">
                    <TableHead>
                        <TableRow>
                            <StyledCell>Data</StyledCell>
                            <StyledCell>Horário</StyledCell>
                            <StyledCell>Profissional</StyledCell>
                            <StyledCell>Especialidade</StyledCell>
                            <StyledCell>Paciente</StyledCell>
                            <StyledCell>Modalidade</StyledCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {querys?.map((line) => {
                            return (
                                <StyledLine>
                                    <StyledCell component="th" scope="row">
                                        {new Date(line.date).toLocaleDateString()}
                                    </StyledCell>
                                    <StyledCell>{line.time}</StyledCell>
                                    <StyledCell>{line.professional[0].name}</StyledCell>
                                    <StyledCell>{line.professional[0].specialty}</StyledCell>
                                    <StyledCell>{line.patient}</StyledCell>
                                    <StyledCell>{line.modality}</StyledCell>
                                </StyledLine>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
