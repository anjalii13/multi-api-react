
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav style={{backgroundColor:"gray",color:"white",padding:"10px"}}>
        <div style={{display:"flex",gap:"20px",alignItems:"center"}}>

     <i>Custom Hooks</i>

     <b><Link to="/products">Products</Link></b>
     <b><Link to="/receipes">Receipes</Link></b>


</div>
    </nav>
  )
}

export default Navbar
