import "./Comments.css";

import UnlikedButtonImage from "../../../unliked.png";
import LikedButtonImage from "../../../likedicon.png";

import { useState } from "react";

export default function Comments() {

    const [isCommentLiked, setCommentLikeStatus] = useState(false);

    return (
        <aside className="comments-container">
            <form className="comment-sort">
                <select name="sort" id="sort">
                    <option>Top Comments</option>
                    <option>Latest</option>
                </select>
            </form>

            <div className="comment">
                <img src="https://static01.nyt.com/images/2020/03/15/magazine/15mag-billie-03/15mag-billie-03-superJumbo-v3.jpg" />
                <div style={{ margin: "10px" }}>
                    <span>username</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestiae aperiam modi quam, fugiat accusamus, veniam laudantium repellendus at dolorum perspiciatis nemo, excepturi maiores nisi libero neque mollitia beatae quod!</p>
                    <button onClick={() => { setCommentLikeStatus(!isCommentLiked) }}>{(isCommentLiked) ? <img src={LikedButtonImage} /> : <img src={UnlikedButtonImage} />}</button>
                </div>
            </div>

            {/* <section className="replies">

                <div className="comment">
                    <img src="https://static01.nyt.com/images/2020/03/15/magazine/15mag-billie-03/15mag-billie-03-superJumbo-v3.jpg" />
                    <div style={{ margin: "10px" }}>
                        <span>username</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestiae aperiam modi quam, fugiat accusamus, veniam laudantium repellendus at dolorum perspiciatis nemo, excepturi maiores nisi libero neque mollitia beatae quod!</p>
                        <button onClick={() => { setCommentLikeStatus(!isCommentLiked) }}>{(isCommentLiked) ? <img src={LikedButtonImage} /> : <img src={UnlikedButtonImage} />}</button>
                    </div>
                </div>

            </section> */}
        </aside>
    )
}