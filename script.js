// Sample data for testing
const players = [
    { name: 'Puppy 1', breed: 'Labrador', team: 'Team A', image: 'Puppy.jpg' },
    { name: 'Puppy 2', breed: 'Golden Retriever', team: 'Team B', image: 'Bowl.jpg' },
  ];
  
  // Display initial roster
  const rosterList = document.getElementById('roster-list');
  players.forEach(player => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${player.name} - ${player.breed} (${player.team || 'Unassigned'}) 
      <button onclick="showDetails('${player.name}', '${player.breed}', '${player.team}', '${player.image}')">See details</button>
      <button onclick="removePlayer('${player.name}')">Remove</button>`;
    rosterList.appendChild(listItem);
  });
  
  // Function to show player details
  function showDetails(name, breed, team, image) {
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('player-details').style.display = 'block';
  
    document.getElementById('details-name').innerText = `Name: ${name}`;
    document.getElementById('details-breed').innerText = `Breed: ${breed}`;
    document.getElementById('details-team').innerText = `Team: ${team || 'Unassigned'}`;
    document.getElementById('details-image').src = image;
  }
  
  // Function to go back to the main list
  function goBack() {
    document.getElementById('main-page').style.display = 'block';
    document.getElementById('player-details').style.display = 'none';
  }
  
  // Function to remove a player
  function removePlayer(name) {
    // Remove the player from the array (simulating server-side removal)
    const index = players.findIndex(player => player.name === name);
    if (index !== -1) {
      players.splice(index, 1);
    }
  
    // Update the UI
    updateRoster();
    goBack();
  }
  
  // Function to add a new player
  function addPlayer() {
    const playerName = document.getElementById('player-name').value;
    const playerBreed = document.getElementById('player-breed').value;
    const playerImageURL = document.getElementById('player-image-url').value;
  
    // Validate inputs
    if (!playerName || !playerBreed) {
      alert('Please enter both name and breed.');
      return;
    }
  
    // Add the new player to the array (simulating server-side addition)
    players.push({
      name: playerName,
      breed: playerBreed,
      team: '',
      image: playerImageURL || 'https://example.com/default.jpg',
    });
  
    // Update the UI
    updateRoster();
  }
  
  // Function to update the roster list
  function updateRoster() {
    rosterList.innerHTML = '';
    players.forEach(player => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `${player.name} - ${player.breed} (${player.team || 'Unassigned'}) 
        <button onclick="showDetails('${player.name}', '${player.breed}', '${player.team}', '${player.image}')">See details</button>
        <button onclick="removePlayer('${player.name}')">Remove</button>`;
      rosterList.appendChild(listItem);
    });
  }
  