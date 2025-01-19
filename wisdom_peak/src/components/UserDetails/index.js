import Context from "../../context/context"
import { Card, Container, Heading, Mail, CityHeading, StyledLink, UesrContainer } from "./styledComponents";

const UserDetails = props =>{
    const {data} = props
    return(
        <Context.Consumer>
            {value =>{
                const {isDarkTheme} = value 
                return(
                    <UesrContainer>
                        {data.map(each=>(
                            <StyledLink to={`/${each.id}`} key={each.id}>
                                <Card isDarkTheme={isDarkTheme}>
                                    <Container>
                                        <Heading isDarkTheme={isDarkTheme}>{each.name}</Heading>
                                        <Mail isDarkTheme={isDarkTheme}>Mail: {each.email}</Mail>
                                    </Container>
                                    <CityHeading isDarkTheme={isDarkTheme}>City: {each.address.city}</CityHeading>
                                </Card>
                            </StyledLink>
                        ))}
                    </UesrContainer>
                )
            }}
        </Context.Consumer>
    )
}

export default UserDetails