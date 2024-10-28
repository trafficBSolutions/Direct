import {useState, useEffect } from 'react'
import MapComponent from '../components/MapComponent';
import '../css/header.css'
import '../css/footer.css'
import '../css/register.css'
import '../css/maps.css'
const states = [
  { abbreviation: 'AL', name: 'Alabama' },
  { abbreviation: 'AK', name: 'Alaska' },
  { abbreviation: 'AZ', name: 'Arizona' },
  { abbreviation: 'AR', name: 'Arkansas' },
  { abbreviation: 'CA', name: 'California' },
  { abbreviation: 'CO', name: 'Colorado' },
  { abbreviation: 'CT', name: 'Connecticut' },
  { abbreviation: 'DE', name: 'Delaware' },
  { abbreviation: 'FL', name: 'Florida' },
  { abbreviation: 'GA', name: 'Georgia' },
  { abbreviation: 'HI', name: 'Hawaii' },
  { abbreviation: 'ID', name: 'Idaho' },
  { abbreviation: 'IL', name: 'Illinois' },
  { abbreviation: 'IN', name: 'Indiana' },
  { abbreviation: 'IA', name: 'Iowa' },
  { abbreviation: 'KS', name: 'Kansas' },
  { abbreviation: 'KY', name: 'Kentucky' },
  { abbreviation: 'LA', name: 'Louisiana' },
  { abbreviation: 'ME', name: 'Maine' },
  { abbreviation: 'MD', name: 'Maryland' },
  { abbreviation: 'MA', name: 'Massachusetts' },
  { abbreviation: 'MI', name: 'Michigan' },
  { abbreviation: 'MN', name: 'Minnesota' },
  { abbreviation: 'MS', name: 'Mississippi' },
  { abbreviation: 'MO', name: 'Missouri' },
  { abbreviation: 'MT', name: 'Montana' },
  { abbreviation: 'NE', name: 'Nebraska' },
  { abbreviation: 'NV', name: 'Nevada' },
  { abbreviation: 'NH', name: 'New Hampshire' },
  { abbreviation: 'NJ', name: 'New Jersey' },
  { abbreviation: 'NM', name: 'New Mexico' },
  { abbreviation: 'NY', name: 'New York' },
  { abbreviation: 'NC', name: 'North Carolina' },
  { abbreviation: 'ND', name: 'North Dakota' },
  { abbreviation: 'OH', name: 'Ohio' },
  { abbreviation: 'OK', name: 'Oklahoma' },
  { abbreviation: 'OR', name: 'Oregon' },
  { abbreviation: 'PA', name: 'Pennsylvania' },
  { abbreviation: 'RI', name: 'Rhode Island' },
  { abbreviation: 'SC', name: 'South Carolina' },
  { abbreviation: 'SD', name: 'South Dakota' },
  { abbreviation: 'TN', name: 'Tennessee' },
  { abbreviation: 'TX', name: 'Texas' },
  { abbreviation: 'UT', name: 'Utah' },
  { abbreviation: 'VT', name: 'Vermont' },
  { abbreviation: 'VA', name: 'Virginia' },
  { abbreviation: 'WA', name: 'Washington' },
  { abbreviation: 'WV', name: 'West Virginia' },
  { abbreviation: 'WI', name: 'Wisconsin' },
  { abbreviation: 'WY', name: 'Wyoming' }
];
const handleAddMarkerButtonClick = () => {
  // Prevent form submission
  setIsSubmitting(false);

  if (!marker && map) {
    const center = map.getCenter();
    const newMarker = new window.google.maps.Marker({
      position: center,
      map: map,
      draggable: true,
      title: "Job Site"
    });

    newMarker.addListener('dragend', () => {
      handleMarkerDrag(newMarker);
    });

    // Notify parent component about marker position
    onMarkerAdd(center.lat(), center.lng());
    setMarker(newMarker);

    // Reset the isSubmitting state after adding the marker
  }
};



const initialState = {
  company: '',
  email: '',
  password: '',
  isMember: true,
}

  const Register = () => {

    
    const [searchBox, setSearchBox] = useState(null);

  const handlePlacesChanged = () => console.log(searchBox.getPlaces());
  const handleLoad = ref => {
    setSearchBox(ref);
  };

    

  const [values, setValues] = useState(initialState)

  // global state and useNavigate
  const handleChange = (e) => {
    console.log(e.target)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

    
      return (
        <div className="page-template-default page page-id-13">
        <header className="site-header">
              <div className="container">
              <h1 className="school-logo-text float-left"><a href="/landing"><strong>Direct</strong> Connection</a></h1>
                         <div className="site-header__util">
                                        </div>
                </div>
                </header>
                <main className="page-register">
    <div className="page-register-banner">
     <div className="page-register-banner__bg-image" style={ { backgroundImage: "url('connection.jpg')" } }></div>
      <div className="page-register-banner-content">
        <h1 className="page-register-banner-title">Register</h1>
      </div>
    </div>
    <h2 className="company-join">Want to join and connect with companies? Sign up and get your company out there:</h2>
    <form className="page-register-form" onSubmit={onSubmit}>
<div className="container container--narrow page-register-section">
  <div className="form-group">
    <h1 className="form-group-label">Company Registration</h1>
    <h2 className="form-group-label-fill">Please Fill Out the Registration Form to Sign Up Your Company! </h2>
    </div>
  <label className="pro-pho">Profile Photo:</label>
  <div className="profile-file-register">
    <label className="profile-photo-label">
    <span className="profile-photo-text">Upload a photo</span>
      <input className="profile-photo"id="image" type="file" name="profile_photo" placeholder="Photo" required="" capture>
      </input>
      </label>
      </div>
      <label className="company-h1-label">Company Name:</label>
      <div className="company-register-name-input">
    <label className="company-register-name">Company Name</label>
      <div className="company-register-input">
        <input className="company-input-register" placeholder="Enter Company"></input>
      </div>
      </div>
      <label className="company-register-emailphone">Email and Phone Number:</label>
      <div className="company-register-emailphone-input">
        <label className="company-register-email">Email</label>
          <div className="email-register-input">
          <input className="email-input-register" placeholder="Enter Email"></input>
          </div>
          <label className="company-register-phone">Phone</label>
          <div className="phone-register-input">
          <input className="phone-input-register" placeholder="Enter Phone Number"></input>
          </div>
          </div>
          <label className="company-register-password">Password:</label>
          <div className="company-register-password-input">
          <label className="company-register-pass">Password</label>
          <div className="password-register-input">
          <input className="password-input-register" placeholder="Enter Password"></input>
          </div>
          </div>
          <label className="company-register-label-address">Company Address:</label>
          <div className="company-register-address-input">
            <div className="company-register-addresscity">
            <div className="address-register-input">
          <label className="company-register-address">Address</label>
          <input className="address-input-register" placeholder="Enter Address"></input>
          </div>
          <div className="city-register-input">
          <label className="company-register-city">City</label>
          <input className="city-input-register" placeholder="Enter City"></input>
          </div>
          </div>
          <div className="company-register-addressstatezip">
          <div className="state-register-input">
          <label className="company-register-state">State</label>
          <select
      name="state"
      className="state-input-register"
    >
      <option value="">Select State</option>
      {states.map(state => (
        <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
      ))}
    </select>
          </div>
          <div className="zip-register-input">
          <label className="company-register-zip">Zip Code</label>
          <input className="zip-input-register" placeholder="Enter Zip"></input>
          </div>
          </div>
          </div>
          <label className="company-register-map">Map:</label>   
          <MapComponent onMarkerAdd={handleAddMarkerButtonClick} />
      <label className="company-register-message">Message:</label>
          <div className="description-input">
          <label className="company-register-description">Tell us about your company and what you do!</label>
          <textarea rows="5" cols="80" id="TITLE" className="message-register-box" placeholder="Description"></textarea>
          </div>
        </div>
        <button className="btn btn--full register-submit" type="submit">REGISTER</button>
        </form>
     
</main>
    <footer className="site-footer">
                  <div className="site-footer__inner container container--narrow">
                    <div className="group">
                      <div className="site-footer__col-one">
                        <h1 className="school-logo-text school-logo-text--alt-color">
                          <a href="/landing"><strong>Direct</strong> Connection</a>
                        </h1>
                        <p><a className="site-footer__link" href="index.html">706-263-0175</a></p>
                      </div>
                    </div>
                  </div>
            </footer>

</div>
    )
}
  

export default Register
