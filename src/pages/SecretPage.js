import Outer from "../components/Outer"

const SecretPage = () => {
  return (
    <Outer>
      <h1>This is a secret page</h1>
      <p>Only authenticate user can see</p>
    </Outer>
  )
}

export default SecretPage
