import { useDispatch } from "react-redux";
import { reactionAdded } from "../../features";
import PropTypes from "prop-types"

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    hearth: "🧡",
    rocket: "🚀",
    coffee: "☕",
};

const ReactionButton = ({ post }) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className=""
                onClick={()=>
                    dispatch(reactionAdded({postId: post.id, reaction: name}))
                    }
                >
                {emoji} {post.reactions[name]}
            </button>
        )
    });
    return <div>{reactionButtons}</div>
};

ReactionButton.propTypes = {
    post: PropTypes.object
}

export default ReactionButton;
