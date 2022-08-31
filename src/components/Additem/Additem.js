import React, { Component } from 'react';

class Additems extends Component{
    state = {
        name : "",
        age: ""
    }
    handleChange = (e) => {
       this.setState({
           [e.target.id] : e.target.value
       })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.Additem(this.state)
    }


    render () {
        return (
            <div> 
                <form onSubmit = {this.handleSubmit}>
                    <input type="text"   placeholder="name" id="name" onChange={this.handleChange}/>
                    <input type="number" placeholder="age"  id="age" onChange={this.handleChange}/>
                    <input type="submit" value = "Add Item"/>
                </form>
            </div>
        )
    }
}

export default Additems;