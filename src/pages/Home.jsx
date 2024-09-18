// import { useEffect } from 'react'
// import { initOTPless } from '../utils/initOtpless'
// import { useNavigate } from 'react-router-dom'

// function Home() {
//   const navigate = useNavigate()

//   useEffect(() => initOTPless(handleUserData), [])

//   /**
//    * handleUserData - otpless callback function
//    * @description
//    * This function is called after authentication is done by otpless-sdk.
//    * Use this function to further process the otplessUser object, navigate to next page or perform any other action based on your requirement.
//    * @param {Object} otplessUser
//    * @returns {void}
//    */
//   const handleUserData = (otplessUser) => {
//     console.log(otplessUser)
    
//     // Extract the identityValue from the identities array
//     const identityValue = otplessUser?.identities?.[0]?.identityValue || "No Identity Found";
    
//     // Show the identityValue in an alert
//     alert(`Identity Value: ${identityValue}`);

//     // Store the entire otplessUser object in localStorage if needed
//     localStorage.setItem('otplessUser', JSON.stringify(otplessUser));

//     // Navigate to another page after handling the data
//     navigate('/result')
//   }

//   return <div id='otpless-login-page'></div>
// }

// export default Home;


import { useEffect } from 'react'
import { initOTPless } from '../utils/initOtpless'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' // Make sure to install axios if you're using it

function Home() {
  const navigate = useNavigate()

  useEffect(() => initOTPless(handleUserData), [])

  /**
   * handleUserData - otpless callback function
   * @description
   * This function is called after authentication is done by otpless-sdk.
   * Use this function to further process the otplessUser object, navigate to next page or perform any other action based on your requirement.
   * @param {Object} otplessUser
   * @returns {void}
   */
  const handleUserData = async (otplessUser) => {
    console.log(otplessUser)
    
    // Extract the identityValue (phone number or email) from the identities array
    const identityValue = otplessUser?.identities?.[0]?.identityValue || "No Identity Found";
    
    // Show the identityValue in an alert
    alert(`Identity Value: ${identityValue}`);

    // Send identityValue to API to check user existence
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login/checkuserexistance2', {
        phoneNumber: identityValue
      });
      
      // Handle the response from the API
      console.log('API Response:', response.data);
      if (response.data.userExists) {
        // Handle existing user scenario
        alert('User already exists. Please log in.');
      } else {
        // Handle new user scenario
        alert('New user. Proceed to signup.');
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
      alert('An error occurred while checking user existence.');
    }

    // Store the entire otplessUser object in localStorage
    localStorage.setItem('otplessUser', JSON.stringify(otplessUser));

    // Navigate to another page after handling the data
    navigate('/result')
  }

  return <div id='otpless-login-page'></div>
}

export default Home;
