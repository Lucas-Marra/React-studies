import Professional from './Professional'

export default interface QueryData extends Professional {
    id: number
    date: string
    time: string
    professional: Array<Professional>
    specialty: string
    patient: string
    modality: string
}
