import React, { Component } from 'react'
import ReactPlayer from 'react-player'



export default class PictureItems extends Component {
  render() {
    const details = this.props.data;
    return (
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
