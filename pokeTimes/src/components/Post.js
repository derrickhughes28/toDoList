import React, { Component } from 'react'

class Post extends Component {
   
   let id =this.props.match.params.post_id
      
   
   
   
   
   
   
    render() {
        return (
            <div className='container'>
                <h4>{this.state.id}</h4>
            </div>
        )
    }
}
export default Post