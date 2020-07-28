import React from 'react'
import './post.css'
function Post() {
    return (
        <div className="post">
            {/* Header */}
            <h3>Username</h3>

            {/* IMage */}
            <img className="post__image" src="" alt="React logo" />

            {/* Username and caption */}
            <h4>Useranme : Capttion</h4>
        </div>
    )
}

export default Post;