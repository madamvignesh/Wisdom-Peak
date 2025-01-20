import { Component } from "react";
import Userdetails from "../UserDetails";
import { CiSearch } from "react-icons/ci";
import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";
import Context from "../../context/context";

import {
  MainContainer,
  UesrContainer,
  InterContainer,
  Container,
  Input,
  Select,
  Heading,
  LoaderContainer,
  ErrorContainer,
} from "./styledComponents";

const profilePicturesList = [
  "https://res.cloudinary.com/dybipmq9j/image/upload/v1737349047/profile_picture3_nyx0uq.jpg",
  "https://res.cloudinary.com/dybipmq9j/image/upload/v1737349047/profile_picture1_djdd4w.jpg",
  "https://res.cloudinary.com/dybipmq9j/image/upload/v1737349047/profile_picture4_ywqqvy.jpg",
  "https://res.cloudinary.com/dybipmq9j/image/upload/v1737349048/profile_picture2_flpsai.jpg",
  "https://res.cloudinary.com/dybipmq9j/image/upload/v1737349048/profile_picture5_akl8wc.jpg",
  "https://res.cloudinary.com/dybipmq9j/image/upload/v1737349048/profile_picture6_yythda.jpg",
]

const apiCallLists = {
  initially: "INITIALLY",
  success: "SUCCESS",
  failure: "FAILURE",
  isProgress: "ISPROGRESS",
};

class Home extends Component {
  state = {
    apiStatus: apiCallLists.initially,
    data: [],
    search: "",
    sort: "A-Z",
  };

  getdata = async () => {
    this.setState({ apiStatus: apiCallLists.isProgress });
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const updatedData = data.map((each) => ({
        id: each.id,
        email: each.email,
        name: each.name,
        phone: each.phone,
        username: each.username,
        website: each.website,
        address: {
          street: each.address.street,
          geo: each.address.geo,
          city: each.address.city,
          zipcode: each.address.zipcode,
          suite: each.address.suite,
        },
        company: {
          name: each.company.name,
          catch_phrase: each.company.catchPhrase,
          bs: each.company.bs,
        },
        profile_url: profilePicturesList[Math.floor(Math.random() * 6)],
      }));
      this.setState({ apiStatus: apiCallLists.success, data: updatedData });
    } else {
      this.setState({ apiStatus: apiCallLists.failure });
    }
  };

  componentDidMount() {
    this.getdata();
  }

  Loader = () => (
    <LoaderContainer>
      <h1>Loading...</h1>
    </LoaderContainer>
  );

  failureView = () => (
    <ErrorContainer>
      <h1>Something went wrong. Please try again later.</h1>
    </ErrorContainer>
  );

  onChangesearch = (event) => {
    this.setState({ search: event.target.value });
  };

  onChangeSort = (event) => {
    this.setState({ sort: event.target.value });
  };

  getDisplay = () => {
    const { data, search, sort } = this.state;
    let filteredData = data.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "A-Z") {
      filteredData = filteredData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "Z-A") {
      filteredData = filteredData.sort((a, b) => b.name.localeCompare(a.name));
    }
    return (
      <Context.Consumer>
        {(value) => {
          const { isDarkTheme } = value;
          return (
            <MainContainer isDarkTheme={isDarkTheme}>
              <Container>
                <Heading>Users Details</Heading>
                <Container>
                  <InterContainer>
                    <h3>Search</h3>
                    <Input
                        type="text"
                        placeholder="Search Here..."
                        onChange={this.onChangesearch}
                        value={search}
                    />
                    <CiSearch size={20} color={isDarkTheme ? "#ffffff" : "#000000"} />
                  </InterContainer>
                  <InterContainer>
                  <h3>Sorting</h3>
                  <Select value={sort} onChange={this.onChangeSort}>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                  </Select>
                  {sort === "A-Z" ? (
                    <FaSortAlphaDown size={20} color={isDarkTheme ? "#ffffff" : "#000000"} />
                  ) : (
                    <FaSortAlphaDownAlt size={20} color={isDarkTheme ? "#ffffff" : "#000000"} />
                  )}
                  </InterContainer>
                </Container>
              </Container>
              <UesrContainer>
              {filteredData.length > 0 ? (
                filteredData.map((user) => (
                  <Userdetails key={user.id} user={user} />
                ))
                ) : (
                  <LoaderContainer>
                    <h1>No User Found</h1>
                  </LoaderContainer>
                )}
              </UesrContainer>
            </MainContainer>
          );
        }}
      </Context.Consumer>
    );
  };

  getRenderContent = () => {
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
    return <>{this.getRenderContent()}</>;
  }
}

export default Home;
