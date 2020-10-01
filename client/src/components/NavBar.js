import React, { Component } from "react";

class NavBar extends Component {
  constructor(){
    super();

    this.state = {
      showForm:false
    };

  }

  showForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }
render(){
  let searchForm = this.state.Show ? (
    <form className="search-form" method="POST">
<input className="search-input" placeholder="Type and hit Enter" />



    </form>
  ) : '';

  let signUp = this.props.sign.map ((sign, index) => {
    let signUp = sign.active ? (
      <a className="signin" href={sign.link>{sing.link}</a>
    )
  })
  


}



}

export default Navbar;
