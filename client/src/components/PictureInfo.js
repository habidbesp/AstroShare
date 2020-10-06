import React, { Component } from "react";
import axios from "axios";
import ReactPlayer from 'react-player'

export default class PictureInfo extends Component {
  
  state = {
    pictureDetails: null
  };



  getPictureData = () => {
    const pictureDate = this.props.match.params.date;
    axios.get(`https://api.nasa.gov/planetary/apod?date=${pictureDate}&api_key=YvAJe2JedQpdEB7waYUIly16t4h4T5AgBe1gVsMV`)
    .then(response => {
      this.setState({
        pictureDetails: response.data
      })
    })
    .catch(err => console.log(err))
  }


  componentDidMount(){
    this.getPictureData()
}


componentDidUpdate(prevProps) {
  if (prevProps.match.params.date !== this.props.match.params.date) {
      this.getPictureData()      
  }  
}


  render() {
    const details = this.state.pictureDetails
    console.log("this is details", details);
    if (!details) return <></>;
    return(
      <div>
        <div>
          {
            details.media_type === 'video' ? 
            (
            <ReactPlayer url={details.url} controls= {true} />
            ):( 
            <img src={details.url} alt={details.title} />
            )
          }
        </div>
        <h2>{details.title}</h2>
        <p>Date: {details.date}</p>
        {
          details.copyright ? 
          (
            <p>Copyright© {details.copyright}</p>
            ):(
              <></>
              )
              }    
        <p>{details.explanation}</p>

      </div>
      )
  }
}
