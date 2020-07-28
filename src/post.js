import React from 'react'
import './post.css'
import Avatar from '@material-ui/core/Avatar'
function Post({username ,caption ,imgUrl}) {
    return (
        <div className="post">
            {/* Header */}
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt={username}
                    src="/static/images/avatar/1.jpg"
                />

                <h3>{username}</h3>
            </div>


            {/* IMage */}
            <img className="post__image" src="" alt="React logo" />

            {/* Username and caption */}
            <h4 className="post__text"><strong>{username}</strong> : {caption}</h4>
        </div>
    )
}

export default Post;