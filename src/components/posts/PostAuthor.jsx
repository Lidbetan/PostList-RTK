import { useSelector } from "react-redux";
import { selectAllUsers } from "../../features";
import PropTypes from "prop-types"

const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers);
    // console.log(users)
    const author = users.find(user => user.id === userId)
   
  return (
    <>
        <span>by <span className="font-semibold">{author ? author.name : "Unknown author"}</span></span>
    </>
  )
}

PostAuthor.propTypes = {
  userId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default PostAuthor