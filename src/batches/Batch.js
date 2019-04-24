import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Batch extends Component {

  handleClick = (event) => {
    this.props.deleteBatch(this.props.batch.batchId)
  }

  render(){
    const batch = this.props.batch
    return(
      <div className="outline">
        <p>Batch ID: <Link to={{
          pathname: '/samples',
          state: {
            batchId: batch.batchId
          }
        }}>{batch.batchId}</Link></p>
        <p>Batch Date: {batch.date}</p>
        <p>Batch Creator: {batch.creator}</p>
        <button onClick={this.handleClick}>Delete</button>

      </div>
    )
  }
}

export default Batch;
