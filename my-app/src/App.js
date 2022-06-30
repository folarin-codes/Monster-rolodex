
import {Component} from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      people: [
       
      ]
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()
      )
      .then(data => this.setState(() => {
        return {
        people : data
      }
      }, ()=> console.log(this.state) ))
    
    
  }
  render() {
      
    return (
      <div className="App">
        
        {
          this.state.people.map((human, index) => {
            return (
              <h1 key={index}> {human.name}</h1>
            )
          })
        }
      
      </div>
    )
  }
}

export default App;
