import styled from 'styled-components'
import facebook from './assets/facebook.png'
import whatsapp from './assets/whatsapp.png'
import instagram from './assets/instagram.png'
import google from './assets/google.png'

const StyledFooter = styled.footer`
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center;
`

const StyledList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: 1em auto;
`

const StyledItem = styled.li`
    list-style-type: none;
`

export default function Footer() {
    const socialMediaList = [facebook, whatsapp, google, instagram]

    return (
        <StyledFooter>
            <StyledList>
                {socialMediaList.map((item, index) => {
                    return (
                        <StyledItem key={index}>
                            <a href="#">
                                <img src={item} />
                            </a>
                        </StyledItem>
                    )
                })}
            </StyledList>
            <p>2023 Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
        </StyledFooter>
    )
}
