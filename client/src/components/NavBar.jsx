import { Container, Nav, Navbar, Stack} from "react-bootstrap"
import {Link} from "react-router-dom"
import Notification from "./chat/Notification"

const NavBar = () =>{
    
    const {user, logoutUser} = useContext(AuthContext)
    
    return( 
    <Navbar bg="dark" className="mb-4" style={{height:"3.75rem"}}>
        <Container>
            <h2>
                <Link to="/" className="link-light text-decoration-none">ChattApp</Link>
            </h2>
            {user && (
               <span className="text-warning">{user?.name} giriş yaptı</span>
            )}
            <Nav>    
                <Stack direction="horizontal" gap={3}>
                    {
                        user && (<>
                        <Notification/>
                         <Link onClick={()=> logoutUser()} to="/login" className="link-light text-decoration-none">Giriş Yap</Link>
                        </>)
                    }
                    {!user && (<>
                     <Link to="/login" className="link-light text-decoration-none">Giriş Yap</Link>
                     <Link to="/register" className="link-light text-decoration-none">Kayıt Ol</Link></>)}
                
                </Stack>
            </Nav>
        </Container>
    </Navbar>
    )
}

export default NavBar