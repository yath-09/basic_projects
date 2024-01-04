import { useParams } from "react-router-dom"

function User() {
    const {userid}=useParams()
  return (
    <div>Hello{userid}</div>
  )
}

export default User