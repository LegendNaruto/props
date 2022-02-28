import Profile from '../Profile/Profile.js';
import pImg from '../../ProfilePic.jpg';
import "./app.css";
function App () {

  return (
    <div className="App">
      <Profile fullName="Jassem Baccari" bio="Go My Code Student" profession="Full Stack Web Developer" imge={pImg} />
    </div>
    );
}

export default App;

