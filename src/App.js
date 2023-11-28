import './App.css';
// Font awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignHanging, faHouse, faHouseUser, faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faSignHanging, faHouse, faHouseUser, faCommentsDollar);


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <FontAwesomeIcon icon="fa-solid fa-sign-hanging" style={{color: "#00c28d", width: "15%", height: "15%", padding: "20px"}} />
      <label>My Listings</label>
      <FontAwesomeIcon icon={faHouse} style={{color: "#5284dc", width: "15%", height: "15%", padding: "20px"}} />
      <label>Potential Acquisitions</label>
      <FontAwesomeIcon icon={faHouseUser} style={{color: "#da9429", width: "15%", height: "15%", padding: "20px"}} />
      <label>Property Management</label>
      <FontAwesomeIcon icon={faCommentsDollar} style={{color: "#dc240d", width: "15%", height: "15%", padding: "20px"}} />
      <label>Cashflow</label>
      </header>
    </div>
  );
}

export default App;