import { Link } from 'react-router-dom'
import Outer from "../components/Outer"

const Home = () => {
  return (
    <Outer>
      <h1>Home, Login to do more thing</h1>
      <p>Email: test@test.com</p>
      <p>Password: testtest</p>
      <Link to="/secret">You can go to secret page after login</Link>
    </Outer>
  )
}

export default Home