import Professional from './Professional'

export default interface Query extends Professional {
    id: number
    date: string
    time: string
    professional: Array<Professional>
    specialty: string
    patient: string
    modality: string
}
