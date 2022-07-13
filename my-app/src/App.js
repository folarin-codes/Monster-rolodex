import { Component } from 'react'
import CardList from './component/card-list/CardList.component';
import SearchBox from './component/search-component/SearchBox.component';

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monster: [
       
      ], 
      searchString :''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()
      )
      .then(user => this.setState(() => {
        return {
        monster : user
      }
      }, ()=> console.log(this.state) ))
    
  }
  
  onSearchChange = (event) => {
    let searchString = event.target.value.toLocaleLowerCase()
   

    this.setState(() => {
      return {searchString}         
    })
  }
  render() {

    const { monster, searchString } = this.state
    const {onSearchChange} = this
    

    let filteredMonsterArray = monster.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchString)

     
       
     
    });
      
    return (
      <div className="App">
       <h1 className='app-title'>Monster's Rolodex</h1>
        
        <SearchBox placeholder='search monster'
          className='search-box'
          onChangeHandler = {onSearchChange}
        />

        <CardList monster={filteredMonsterArray} />
      
      </div>
    )
  }
}

export default App;
