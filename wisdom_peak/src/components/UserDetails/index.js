import Context from "../../context/context";
import {
  Card,
  Container,
  Heading,
  Mail,
  CityHeading,
  StyledLink,
} from "./styledComponents";

const UserDetails = (props) => {
  const { user } = props;
  return (
    <Context.Consumer>
      {(value) => {
        const { isDarkTheme } = value;
        return (
          <StyledLink to={`/${user.id}`} key={user.id}>
            <Card isDarkTheme={isDarkTheme} style={{ "--order": user.id }}>
              <Container>
                <Heading isDarkTheme={isDarkTheme}>{user.name}</Heading>
                <Mail isDarkTheme={isDarkTheme}>Mail: {user.email}</Mail>
              </Container>
              <CityHeading isDarkTheme={isDarkTheme}>
                City: {user.address.city}
              </CityHeading>
            </Card>
          </StyledLink>
        );
      }}
    </Context.Consumer>
  );
};

export default UserDetails;
