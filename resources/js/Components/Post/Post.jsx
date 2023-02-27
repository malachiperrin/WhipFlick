import React from "react";
import "./Post.css";

import UnlikedButtonImage from "../../../unliked.png";
import CommentButtonImage from "../../../comment.png";
import ShareButtonImage from "../../../share.png";

export default function Post() {

    return (
        <article className="post">
            <div>
                <button className="car-specs-button">View Car Specs</button>
                <button><img src={ShareButtonImage} /></button>
            </div>

            <img className="post-image" src="https://i.pinimg.com/736x/b5/b8/5b/b5b85b835f605fa26cac01ff818cb08c.jpg" />

            <div>
                <button><img src={UnlikedButtonImage} /></button>
                <button><img src={CommentButtonImage} /></button>
            </div>
        </article>
    )

}