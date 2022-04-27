import React from 'react';
import axios from 'axios';
 
class User extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      name: ''

    }
  }

  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value})
  }

  fetchName = (e) => {
    e.preventDefault();
    console.log(this.state.name)
    axios.get('https://625c8a3bc9e78a8cb9b89fa4.mockapi.io/food/')
    .then(res => {
      console.log(res.data)
    });
    console.log();
  }

  // submitHandler = e =>{
  //   e.preventDefault()
  //   console.log(this.state)
  //   axios.post('https://625c8a3bc9e78a8cb9b89fa4.mockapi.io/food/', this.state)
  //     .then(response =>{
  //       console.log(response)
  //     })
  //     .catch(error =>{
  //       console.log(error)
  //     })
  // }


  render() {
    const {name} = this.state
    return (
      <div>
        <form onSubmit = {this.fetchName}>
          <span>
            <input className="mb-2 form-control first" type="text" name="food" value={name} onChange={this.handleChange} placeholder="ingredients"/>
            <button className="btn btn-outline-primary mx-2" style={{'borderRadius':'50px', "font-weight":"bold"}} type="submit">Search</button>
          </span>
        </form>
      </div>
    )
  }
}
 
export default User;