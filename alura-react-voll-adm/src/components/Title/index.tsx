import rating from './assets/rating.png'
import graph from './assets/graph.png'
import query from './assets/query.png'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    image?: string
    children?: ReactNode
}

interface Images {
    rating: string
    graph: string
    query: string
}

const StyledSpan = styled.span<Props>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25px;
    height: 25px;
    background-image: ${(props) => (props.image ? `url(${props.image})` : 'none')};
`

const StyledTitle = styled.h2`
    color: var(--azul-claro);
`

const StyledContainer = styled.div`
    dsplay: flex;
    align-items: center;
`

export default function Title({ image, children }: Props) {
    const imagesList: Images = {
        rating,
        graph,
        query
    }

    return (
        <StyledContainer>
            {image && <StyledSpan image={imagesList[image as keyof Images]} />}
            <StyledTitle>{children}</StyledTitle>
        </StyledContainer>
    )
}
