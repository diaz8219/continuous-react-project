const Home = () => {
  let user = JSON.parse(localStorage.getItem("user"))
  return (
    <div>welcome, {user.name}</div>
  )
}

export default Home