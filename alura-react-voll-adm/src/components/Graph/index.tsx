import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import QueryData from '../../types/QueryData'
import Professional from '../../types/Professional'
import useGraphData from './useGraphData'
import styled from 'styled-components'

interface Data {
    name: string
    querys: number
}

interface Props {
    querys: QueryData[] | null
    professionals: Professional[] | null
}

const StyledSection = styled.section`
    background-color: var(--branco);
    border-radius: 16px;
`

export default function Graph({ querys, professionals }: Props) {
    let data: Array<Data> = useGraphData({ professionals, querys })

    return (
        <StyledSection>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    layout="vertical"
                    data={data}
                    margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
                >
                    <XAxis type="number"></XAxis>
                    <YAxis type="category" dataKey="name"></YAxis>
                    <Bar dataKey="querys" fill="#083860" barSize={30}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </StyledSection>
    )
}
