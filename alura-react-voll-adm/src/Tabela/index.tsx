import {
    Paper,
    TableCell,
    TableContainer,
    TableHead,
    Table,
    TableRow,
    TableBody
} from '@mui/material'
import QueryData from '../types/QueryData'

export default function DataTable({ querys }: { querys: QueryData[] | null }) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela customizada">
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Horário</TableCell>
                            <TableCell>Profissional</TableCell>
                            <TableCell>Especialidade</TableCell>
                            <TableCell>Paciente</TableCell>
                            <TableCell>Modalidade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {querys?.map((line) => {
                            return (
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {new Date(line.date).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>{line.time}</TableCell>
                                    <TableCell>{line.professional[0].name}</TableCell>
                                    <TableCell>{line.professional[0].specialty}</TableCell>
                                    <TableCell>{line.patient}</TableCell>
                                    <TableCell>{line.modality}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
