import React from 'react';
import teamMember1 from '../image/hero.jpg';
import teamMember2 from '../image/hero2.jpeg';
import teamMember3 from '../image/hero3.jpeg';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dinesh Paudel',
      position: 'CEO',
      expertise: 'Sofware Developer',
      photo: teamMember1,
    },
    {
      id: 2,
      name: 'Ramesh Dhami',
      position: 'CTO',
      expertise: 'Software Development',
      photo: teamMember2,
    },
    {
      id: 3,
      name: 'Aniruddha Bishwakarma',
      position: 'CMO',
      expertise: 'Digital Marketing',
      photo: teamMember3,
    },
  ];

  return (
    <div id='team' style={{ backgroundColor: 'lightblue',height:'100vh', padding: '50px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Team</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {teamMembers.map((member) => (
          <div key={member.id} style={teamMemberStyle}>
            <img
              src={member.photo}
              alt={member.name}
              style={{ width: '100%', borderRadius: '50%', marginBottom: '15px' }}
            />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <p>Expert at: {member.expertise}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const teamMemberStyle = {
  textAlign: 'center',
  maxWidth: '300px',
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
};

export default TeamSection;
