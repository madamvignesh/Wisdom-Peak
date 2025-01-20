import { FaLongArrowAltRight } from "react-icons/fa";

import Context from "../../context/context";
import {
  Card,
  Container,
  ProfileImage,
  UserHeading,
  HeadingContainer,
  Heading,
  Mail,
  CityHeading,
  StyledLink,
  DescContainer,
} from "./styledComponents";

const UserDetails = (props) => {
  const { user } = props;
  return (
    <Context.Consumer>
      {(value) => {
        const { isDarkTheme } = value;
        return (
            <Card isDarkTheme={isDarkTheme}>
              <HeadingContainer>
                <ProfileImage src={user.profile_url} alt="image"/>
                <UserHeading>
                  <Heading isDarkTheme={isDarkTheme}>{user.name}</Heading>
                  <Mail isDarkTheme={isDarkTheme}>{user.email}</Mail>
                </UserHeading>
              </HeadingContainer>
              <hr />
              <Container>
                <CityHeading isDarkTheme={isDarkTheme}>
                  From: {user.address.city}
                </CityHeading>
                <StyledLink to={`/${user.id}`} key={user.id}>
                  <DescContainer>
                    <h3>More Deatils</h3>
                    <FaLongArrowAltRight size={20}/>
                  </DescContainer>
                </StyledLink>
              </Container>
            </Card>
        );
      }}
    </Context.Consumer>
  );
};

export default UserDetails;
