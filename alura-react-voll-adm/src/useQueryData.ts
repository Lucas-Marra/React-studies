import Query from './types/Query'
import useFetch from './useFetch'

export default function useQueryData() {
    return useFetch<Query[]>({ url: 'consultas' })
}
