import { BrowserRouter, Route, Routes,useParams } from 'react-router-dom';
import { Component } from 'react';
import Home from './components/Home'
import Header from './components/Header';
import Context from './context/context';
import './App.css';
import User from './components/User';

function UserWrapper() {
  const { id } = useParams();
  return <User id={id} />;
}

class App extends Component {
  state = {
    isDarkTheme: false,
  };

  onChangeTheme = () => {
    this.setState((prevState) => ({ isDarkTheme: !prevState.isDarkTheme }));
  };

  render() {
    const { isDarkTheme } = this.state;
    return (
      <Context.Provider
        value={{
          isDarkTheme,
          onChangeTheme: this.onChangeTheme,
        }}
      >
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/:id"
              element={<UserWrapper/>}
            />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    );
  }
}

export default App;
