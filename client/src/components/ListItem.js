import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'
import axios from "axios";

class ListItem extends Component {
  
  // handleSave = () => {

  //   Axios.get("/images")
  //   console.log("save", this.props.data)
    
  // }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('/images', {
      title: this.props.data.title,
      description: this.props.data.explanation,
      date: this.props.data.date,
      url: this.props.data.url
    })
  }

  render() {
    // console.log("this are the props", this.props.data);
    const items = this.props.data;
    // console.log("This is items", items);
   
    return (
      <div>
        <div>
          {items.media_type === 'video' ? (
            <ReactPlayer url={items.url} controls={true} />
            ):(
              <Link to={items.date}><img src={items.url} alt={items.title}/></Link>
              )
                }
        </div>
        {items.media_type === 'video' ? (
          <Link to={items.date}>Details of this Video</Link>
          ):(
            <></>
            )
              } 
        <h2>{items.title}</h2>
        <p>{items.date}</p>
        <button onClick={this.handleSubmit}>Save to your Favourites</button>
      </div>
    );
  }
}

export default ListItem;


