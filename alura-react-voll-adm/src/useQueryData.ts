import Query from './types/QueryData'
import useFetch from './useFetch'

export default function useQueryData() {
    return useFetch<Query[]>({ url: 'querys' })
}
