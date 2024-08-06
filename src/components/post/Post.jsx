import {useParams} from "react-router-dom";
import {useState} from "react";


const Post = () => {
    const [post, setPost] = useState({})
    const {postID} = useParams()
    //console.log(postID)

    return (
        <div>
            <h1>I am here</h1>
        </div>
    );
};

export default Post;