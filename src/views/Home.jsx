import Header from '../components/Header'

const Home = () => {
  let user = JSON.parse(localStorage.getItem("user"))
  return (
    <div>
      <Header />
    </div>
  )
}

export default Home