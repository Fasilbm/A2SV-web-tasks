import React from 'react';
import './App.css'; // Import CSS file
import profilePic from './person1.jpg'; // Import profile picture

function ProfileCard(props) {


  return (
    <div className="profile-card">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="profile-info">
        <h2 className="name">{props.name}</h2>
        <p className="bio">{props.bio}</p>
          <div>
            <p className="email">Email: {props.email}</p>
            <p className="location">Location: {props.location}</p>
          </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="profile-container">
        <ProfileCard
          name="Jhon Doe"
          bio="Frontend Developer"
          email="jane.doe@example.com"
          location="New York, NY"
        />
      </div>
    </div>
  );
}

export default App;