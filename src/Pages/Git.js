import React, { useState, useEffect } from 'react';

const Git = ({ username }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div style={styles.container}>
      {userData ? (
        <>
          <img src={userData.avatar_url} alt="Profile" style={styles.avatar} />
          <h2 style={styles.name}>{userData.name}</h2>
          <p style={styles.username}>@{userData.login}</p>
          <p style={styles.bio}>{userData.bio}</p>
          <div style={styles.stats}>
            <div style={styles.statItem}>
              <p style={styles.statValue}>{userData.public_repos}</p>
              <p style={styles.statLabel}>Repos</p>
            </div>
            <div style={styles.statItem}>
              <p style={styles.statValue}>{userData.followers}</p>
              <p style={styles.statLabel}>Followers</p>
            </div>
            <div style={styles.statItem}>
              <p style={styles.statValue}>{userData.following}</p>
              <p style={styles.statLabel}>Following</p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#16082B',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(160,50,240,1)',
    maxWidth: '900px',
    width: '90%',
    margin: '50px auto',
    textAlign: 'center',
    
  },
  avatar: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px',
    border: '4px solid #f0f0f0',
    
  },
  name: {
    margin: '0',
    fontSize: '24px',
    color: 'white',
  },
  username: {
    margin: '5px 0 10px',
    color: 'white',
  },
  bio: {
    margin: '0 0 20px',
    color: 'white',
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  statItem: {
    flex: '1',
  },
  statValue: {
    margin: '0',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
  },
  statLabel: {
    margin: '0',
    color: 'white',
  },
};

export default Git;