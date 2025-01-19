import React, { Component } from 'react'
import Context from '../../context/context'
import withRouter from '../../utils/withRouter';
import {
  MainContainer,
  UserDetailContainer,
  DetailItem,
  Heading,
  StyledLink,
  Button,
} from './styledComponents';


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
                <Heading isDarkTheme={isDarkTheme}>User Details</Heading>
                <DetailItem>
                  <strong>Name:</strong> {user.name}
                </DetailItem>
                <DetailItem>
                  <strong>Email:</strong> {user.email}
                </DetailItem>
                <DetailItem>
                  <strong>Phone:</strong> {user.phone}
                </DetailItem>
                <DetailItem>
                  <strong>Username:</strong> {user.username}
                </DetailItem>
                <DetailItem>
                  <strong>Website:</strong> {user.website}
                </DetailItem>
                <DetailItem>
                  <strong>Address:</strong>
                  <div>
                    <p>
                      {user.address.street}, {user.address.suite}
                    </p>
                    <p>
                      {user.address.city} - {user.address.zipcode}
                    </p>
                  </div>
                </DetailItem>
                <DetailItem>
                  <strong>Company:</strong>
                  <div>
                    <p>Name: {user.company.name}</p>
                    <p>Catchphrase: {user.company.catch_phrase}</p>
                    <p>BS: {user.company.bs}</p>
                  </div>
                </DetailItem>
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
