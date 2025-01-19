import { Component } from "react"
import Userdetails from "../UserDetails"

import {
    MainContainer,
    UesrContainer,
    Container,
    Input,
    Select,
} from './styledComponents'

const apiCallLists = {
    initially: 'INITIALLY',
    success: 'SUCCESS',
    failure: 'FAILURE',
    isProgress: 'ISPROGRESS',
}

class Home extends Component{
    state = {
        apiStatus: apiCallLists.initially,
        data:[],
        search: "",
        sort: 'A-Z',
    }

    getdata = async () =>{
        this.setState({apiStatus: apiCallLists.isProgress})
        const url = "https://jsonplaceholder.typicode.com/users"
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          const updatedData = data.map(each=>({
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
            }
          }))
          this.setState({apiStatus: apiCallLists.success, data: updatedData})
        } else {
            this.setState({apiStatus: apiCallLists.failure})
        }
    }

    componentDidMount(){
        this.getdata()
    }

    Loader = () =>{
        <div>
            <h1>Loading...</h1>
        </div>
    }

    failureView = () =>(
        <div>
            <h1>Something went Wrong</h1>
        </div>
    )

    onChangesearch = event =>{
        this.setState({search: event.target.value})
    }

    onChangeSort = event =>{
        this.setState({sort: event.target.value})
    }

    getDisplay = () =>{
        const { data, search, sort } = this.state;
        let filteredData = data.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
        );
        if (sort === "A-Z") {
        filteredData = filteredData.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sort === "Z-A") {
        filteredData = filteredData.sort((a, b) => b.name.localeCompare(a.name));
        }
        return (
            <MainContainer>
                <Container>
                    <h1>User Details</h1>
                    <Container>
                        <Input type="text" onChange={this.onChangesearch} value={search} />
                        <Select value={sort} onChange={this.onChangeSort}>
                            <option value="A-Z">A-Z</option>
                            <option Value="Z-A">Z-A</option>
                        </Select>
                    </Container>
                </Container>
                <UesrContainer>
                    {filteredData.map(user=>(
                        <Userdetails key={user.id} user={user} />
                    ))}
                </UesrContainer>
            </MainContainer>
        )
    }
 
    getRenderContent = () =>{
        const {apiStatus} = this.state
        switch(apiStatus){
            case apiCallLists.isProgress:
                return this.Loader()
            case apiCallLists.failure:
                return this.failureView()
            case apiCallLists.success:
                return this.getDisplay()
            default: 
                return null
        }
    }

    render(){
        return (
            <>
                {this.getRenderContent()}
            </>
        )
    }
}

export default Home
