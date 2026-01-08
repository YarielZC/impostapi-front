import Button from "../../components/Button/Button";
import './HomePage.css'
import { useAuth } from "../../context/AutContext/useAuth";

export default function HomePage() {
  const { user, login, logout } = useAuth()

  const handleClick = () => {
    const fakeUserData = {
      name: "Yariel Dev",
      username: "yariel_code",
      email: "contacto@yariel.com"
    };

    const fakeToken = "ey.token.falso.123";
    const fakeRefreshToken = "refreshtoken.456";

    login(fakeUserData, fakeToken, fakeRefreshToken);
  }
  return (
    <>
      <h1>Home Page</h1>
      {user ? (
        <div style={{display: 'flex', gap: '2rem'}}>
          <Button onClick={logout} variant="primary" className="text-white cursor-pointer w-32">LogOut</Button>
          <span style={{color: "white"}}>Hola, {user.name}</span>
        </div>
      ): (
        <Button onClick={handleClick} variant="primary" className="text-white cursor-pointer w-32">Login</Button>
      )}
      

    </>
  )
}