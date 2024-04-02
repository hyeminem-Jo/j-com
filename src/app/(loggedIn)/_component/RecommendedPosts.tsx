import Post from '@/app/(loggedIn)/_component/Post/Post'

function RecommendedPosts() {
  const style = {
    paddingTop: '20px',
    borderTop: '1px solid #ccc',
  }
  const fontStyle = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '15px',
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
