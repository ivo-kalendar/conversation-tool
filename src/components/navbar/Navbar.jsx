import './navbar.css'
import tool from '../../assets/tool.svg'

function Navbar() {
  return (
    <div className="navbar">
        <img src={tool} alt="Conversation Tool" />
        <img src={tool} alt="Conversation Tool" />
        <img src={tool} alt="Conversation Tool" />
    </div>
  )
}

export default Navbar