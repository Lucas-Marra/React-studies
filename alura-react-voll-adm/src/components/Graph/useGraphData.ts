import Professional from '../../types/Professional'
import QueryData from '../../types/QueryData'

interface Data {
    name: string
    querys: number
}

interface Props {
    professionals: Professional[] | null
    querys: QueryData[] | null
}

export default function useGraphData({ professionals, querys }: Props) {
    let data: Array<Data> = []

    if (professionals && querys) {
        data = professionals.map((professional) => ({
            name: professional.name,
            querys: querys.filter((query) =>
                query.professional.some((prof) => prof.name === professional.name)
            ).length
        }))
    }

    return data
}
