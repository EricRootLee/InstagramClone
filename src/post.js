import React from 'react'
import './post.css'
import Avatar from '@material-ui/core/Avatar'
function Post() {
    return (
        <div className="post">
            {/* Header */}
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="username"
                    src="/static/images/avatar/1.jpg"
                />

                <h3>Username</h3>
            </div>


            {/* IMage */}
            <img className="post__image" src="" alt="React logo" />

            {/* Username and caption */}
            <h4 className="post__text"><strong>Useranme</strong> : Capttion</h4>
        </div>
    )
}

export default Post;