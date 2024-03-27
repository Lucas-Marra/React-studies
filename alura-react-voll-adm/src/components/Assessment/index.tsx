import styled from 'styled-components'
import Professional from '../../types/Professional'
import Card from './Card'

const CardSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`

export default function Assessment({ professionals }: { professionals: Professional[] | null }) {
    return (
        <CardSection>
            {professionals?.map((professional) => {
                return <Card professional={professional} />
            })}
        </CardSection>
    )
}
