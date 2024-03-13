import Post from "@/app/(loggedIn)/_component/Post";

function RecommendedPosts() {
  const style = {
    paddingTop: '20px',
    borderTop: '1px solid #ccc',
  }
  const fontStyle = {
    fontSize: '24px',
    fontWeight: '700',
  }
  return (
    <div style={style}>
      <h4 style={fontStyle}>추천 게시물</h4>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default RecommendedPosts
