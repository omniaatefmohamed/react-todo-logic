import React, {Component} from 'react'
import Todoitems from './components/Todoitems/Todoitems'
import Additems  from './components/Additem/Additem';

class App extends  Component {

  state = {
    items : [
        {id: 1 , name : 'sara', age : 30},
        {id: 2 , name : 'atef', age : 40}
    ]
  }
  deleteitem = (id) => {
    let items = this.state.items.filter(item => {
        return item.id !== id
    })
    this.setState({items})
  }

  Additem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items});
  }
  render () {
    return (
      <div> 
          <Todoitems items = {this.state.items} deleteitem = {this.deleteitem}/>
          <Additems Additem = {this.Additem}/>
      </div>
    );
  }
}


export default App;
