import { useHistory} from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function Footer() {
  const { user, setUser, signOutUser } = useAuth();
  const history = useHistory();

  async function handleSignOut() {
    await signOutUser();
    setUser(null);
    history.replace('/login');
  }

  return (
    <footer>
      <button onClick={handleSignOut}>Sign Out</button>
    </footer>
  )
}
