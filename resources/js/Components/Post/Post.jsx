import React, { useState } from "react";
import "./Post.css";

import UnlikedButtonImage from "../../../unliked.png";
import LikedButtonImage from "../../../likedicon.png";
import CommentButtonImage from "../../../comment.png";
import ShareButtonImage from "../../../share.png";
import Comments from "@/Layouts/Comments/Comments";

export default function Post() {

    const [isPostLiked, setPostLikeStatus] = useState(false);


    return (
        <React.Fragment>
            <article className="post">
                <div>
                    <button className="car-specs-button">View Car Specs</button>
                    <button><img src={ShareButtonImage} /></button>
                </div>

                <img className="post-image" src="https://i.pinimg.com/736x/b5/b8/5b/b5b85b835f605fa26cac01ff818cb08c.jpg" />

                <div>
                    <button onClick={() => { setPostLikeStatus(!isPostLiked) }}>{(isPostLiked) ? <img src={LikedButtonImage} /> : <img src={UnlikedButtonImage} />}</button>
                    <button><img src={CommentButtonImage} /></button>
                </div>
            </article>

            <Comments />
        </React.Fragment>

    )

}