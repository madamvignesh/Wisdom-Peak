import React, { Component, use } from 'react'
import Context from '../../context/context'
import { FaMapLocationDot } from 'react-icons/fa6'; 
import { FaMapMarkerAlt, FaBuilding } from "react-icons/fa"
import { GoGlobe } from "react-icons/go"
import {
  MainContainer,
  UserDetailContainer,
  Container,
  DetailItem,
  HeadingDetails,
  Heading,
  StyledLink,
  Head,
  SubHead,
  DescHead,
  Desc,
  Button,
  ProfileImage,
} from './styledComponents';

const profilePicturesList = [
  "https://res.cloudinary.com/dybipmq9j/image/upload/v1737349047/profile_picture3_nyx0uq.jpg",
  "https://res.cloudinary.com/dybipmq9j/image/upload/v1737349047/profile_picture1_djdd4w.jpg",
  "https://res.cloudinary.com/dybipmq9j/image/upload/v1737349047/profile_picture4_ywqqvy.jpg",
  "https://res.cloudinary.com/dybipmq9j/image/upload/v1737349048/profile_picture2_flpsai.jpg",
  "https://res.cloudinary.com/dybipmq9j/image/upload/v1737349048/profile_picture5_akl8wc.jpg",
  "https://res.cloudinary.com/dybipmq9j/image/upload/v1737349048/profile_picture6_yythda.jpg",
]

const apiCallLists = {
  initially: 'INITIALLY',
  success: 'SUCCESS',
  failure: 'FAILURE',
  isProgress: 'ISPROGRESS',
};

class User extends Component {
  state = {
    apiStatus: apiCallLists.initially,
    user: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({ apiStatus: apiCallLists.isProgress });
    const { id } = this.props;
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const updatedData = {
        id: data.id,
        email: data.email,
        name: data.name,
        phone: data.phone,
        username: data.username,
        website: data.website,
        address: {
          street: data.address.street,
          geo: data.address.geo,
          city: data.address.city,
          zipcode: data.address.zipcode,
          suite: data.address.suite,
        },
        company: {
          name: data.company.name,
          catch_phrase: data.company.catchPhrase,
          bs: data.company.bs,
        },
        profile_url: profilePicturesList[Math.floor(Math.random() * 6)],
      }
      console.log(updatedData)
      this.setState({ apiStatus: apiCallLists.success, user: updatedData });
    } else {
      this.setState({ apiStatus: apiCallLists.failure });
    }
  };

  Loader = () => (
    <div>
      <h1>Loading...</h1>
    </div>
  );

  failureView = () => (
    <div>
      <h1>Something went wrong</h1>
    </div>
  )

  handleBack = () => {
    const { history } = this.props; 
    history.goBack(); 
  };

  getDisplay = () => {
    const { user } = this.state;
    return (
      <Context.Consumer>
        {(value) => {
          const { isDarkTheme } = value;
          return (
            <MainContainer isDarkTheme={isDarkTheme}>
              <UserDetailContainer isDarkTheme={isDarkTheme}>
                <Heading isDarkTheme={isDarkTheme}>{user.username}</Heading>
                <DetailItem>
                  <ProfileImage src={user.profile_url} alt="image"/>
                  <HeadingDetails>
                    <Head>{user.name}</Head>
                    <SubHead>{user.email}</SubHead>
                    <SubHead>{user.phone}</SubHead>
                  </HeadingDetails>
                </DetailItem>
                <Container>
                <DescHead> <GoGlobe size={20} /> Website: <spam>{user.website}</spam> </DescHead>
                  <DescHead> <FaMapMarkerAlt size={20} /> Location <spam>{user.address.geo.lat}, {user.address.geo.lng}</spam> </DescHead>
                  <DescHead>
                    <FaMapLocationDot size={20}/> {"    "}
                    Address</DescHead>
                  <Desc>
                    {user.address.street}, {user.address.suite}, {user.address.city} - {user.address.zipcode}
                  </Desc>
                </Container>
                <Container>
                  <DescHead>
                    <FaBuilding size={20}/> {"    "}
                    Company
                  </DescHead>
                  <Desc>
                    Name: <spam>{user.company.name}</spam> 
                    <br />
                    Catch Phrase: <spam>{user.company.catch_phrase}</spam>
                    <br />
                    BS: <spam>{user.company.bs}</spam>
                  </Desc>
                </Container>
              </UserDetailContainer>
              <StyledLink to='/' >
                <Button>Back</Button>
              </StyledLink>
            </MainContainer>
          );
        }}
      </Context.Consumer>
    );
  };

  renderContent = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiCallLists.isProgress:
        return this.Loader();
      case apiCallLists.failure:
        return this.failureView();
      case apiCallLists.success:
        return this.getDisplay();
      default:
        return null;
    }
  };

  render() {
    return (
        <>
            {this.renderContent()}
        </>
    )
  }
}

export default User;
