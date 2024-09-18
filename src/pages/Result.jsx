// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';




// function Result() {
// 	const navigate = useNavigate()
// 	const [token, setToken] = useState('')
// 	const [user, setUser] = useState(null)
// 	function Logout() {
// 		localStorage.removeItem('otplessUser');
// 		// Redirect to login page
// 		navigate('/')
// 	}

//   // Helper function to render user data
// 	const renderUserData = (data) => {
// 		return Object.keys(data).map((key) => {
// 		  const value = data[key];
// 		  return (
// 			<div key={key}>
// 			  <strong>{key}:</strong> {typeof value === 'object' && value !== null ? JSON.stringify(value, null, 2) : value}
// 			</div>
// 		  );
// 		});
// 	  };

	  
// 	useEffect(() => {
// 		const storedToken = localStorage.getItem('nekoTssel-PTO')
// 		setToken(storedToken)
// 		const user = JSON.parse(localStorage.getItem('otplessUser'));
// 		console.log(user)
// 		if (user) {
// 			setUser(user);
// 		}
		
// 	}, [])

// 	return  (
// 		<div className="container">
// 		<h1 className="heading">User Information</h1>
// 		<div className="tokenContainer">
// 		  <strong>Token:</strong> <span>{token}</span>
// 		</div>
// 		<br />
// 		<div className="userDetailsContainer">
// 		  <h2 className="subHeading">User Details:</h2>
// 		  <table className="userTable">
// 			<thead>
// 			  <tr>
// 				<th>Key</th>
// 				<th>Value</th>
// 			  </tr>
// 			</thead>
// 			<tbody>
// 			  {user ? renderUserData(user) : <tr><td colSpan="2">No user data available.</td></tr>}
// 			</tbody>
// 		  </table>
// 		</div>
// 		<br />
// 		<div className="noteContainer">
// 		  <p>
// 			This token can be validated using OTPless API endpoints from backend.{' '}
// 			<a target="_blank" rel="noopener noreferrer" href="https://otpless.com/platforms/verify-sdk-token">Click here</a> for more details.
// 		  </p>
// 		  <p>Note: Tokens can only be validated once and cannot be used again. Re-authenticate to get a new token.</p>
// 		</div>
// 		<button className="logoutButton" onClick={Logout}>Logout</button>
// 	  </div>
// 	)
// }

// export default Result


// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Result() {
//   const navigate = useNavigate();
//   const [token, setToken] = useState('');
//   const [user, setUser] = useState(null);

//   // Helper function to render user data in table rows
//   const renderUserData = (data) => {
//     return Object.keys(data).map((key) => {
//       const value = data[key];
//       return (
//         <tr key={key}>
//           <td><strong>{key}</strong></td>
//           <td>{typeof value === 'object' && value !== null ? JSON.stringify(value, null, 2) : value}</td>
//         </tr>
//       );
//     });
//   };

//   useEffect(() => {
//     const storedToken = localStorage.getItem('nekoTssel-PTO');
//     setToken(storedToken);

//     const storedUser = JSON.parse(localStorage.getItem('otplessUser')); // Retrieve user data with correct key
//     console.log(storedUser);
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   return (
//     <div className="container">
//       <h1 className="heading">User Information</h1>
//       <div className="tokenContainer">
//         <strong>Token:</strong> <span>{token}</span>
//       </div>
//       <br />
//       <div className="userDetailsContainer">
//         <h2 className="subHeading">User Details:</h2>
//         <table className="userTable">
//           <thead>
//             <tr>
//               <th>Key</th>
//               <th>Value</th>
//             </tr>
//           </thead>
//           <tbody>
//             {user ? renderUserData(user) : (
//               <tr>
//                 <td colSpan="2">No user data available.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//       <br />
//       <div className="noteContainer">
//         <p>
//           This token can be validated using OTPless API endpoints from backend.{' '}
//           <a target="_blank" rel="noopener noreferrer" href="https://otpless.com/platforms/verify-sdk-token">Click here</a> for more details.
//         </p>
//         <p>Note: Tokens can only be validated once and cannot be used again. Re-authenticate to get a new token.</p>
//       </div>
//     </div>
//   );
// }

// export default Result;
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Result.css'; // Import the CSS file

function Result() {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);
  function Logout() {
			localStorage.removeItem('otplessUser');
			// Redirect to login page
			navigate('/')
		}

  // Helper function to render user data in table rows
  const renderUserData = (data) => {
    return Object.keys(data).map((key) => {
      const value = data[key];
      return (
        <tr key={key}>
          <td data-label="Key"><strong>{key}</strong></td>
          <td data-label="Value">{typeof value === 'object' && value !== null ? JSON.stringify(value, null, 2) : value}</td>
        </tr>
      );
    });
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('nekoTssel-PTO');
    setToken(storedToken);

    const storedUser = JSON.parse(localStorage.getItem('otplessUser')); // Retrieve user data with correct key
    console.log(storedUser);
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="container">
      <h1 className="heading">User Information</h1>
      <div className="tokenContainer">
        <strong>Token:</strong> <span>{token}</span>
      </div>
      <br />
      <div className="userDetailsContainer">
        <h2 className="subHeading">User Details:</h2>
        <table className="userTable">
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {user ? renderUserData(user) : (
              <tr>
                <td colSpan="2">No user data available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <br />
      <div className="noteContainer">
        <p>
          This token can be validated using OTPless API endpoints from backend.{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://otpless.com/platforms/verify-sdk-token">Click here</a> for more details.
        </p>
        <p>Note: Tokens can only be validated once and cannot be used again. Re-authenticate to get a new token.</p>
      </div>
      <button className="link grow-on-hover" onClick={Logout}>Logout</button>
    </div>
  );
}

export default Result;

