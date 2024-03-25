import Professional from './types/Professional'
import useFetch from './useFetch'

export default function useProfessionalsData() {
    return useFetch<Professional[]>({ url: 'profissionais' })
}
