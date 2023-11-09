// This and following questions will now be about writing logic using (pseudo) JavaScript on the "whiteboard".

// My friend Lee is a fan of foosball (insert/use another 1-on-1 game here). Lee plays in an amateur foosball league, has asked us for help writing a program to understand player rankings.

// We're given some game outcome data like the following:

matches = [
  { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
  { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
  { winner: 'Elise', loser: 'Carol', loser_points: 4 },
  { winner: 'Alice', loser: 'Carol', loser_points: 2 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
  { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
];
// Write a function that returns a list of all the player names (no player should be listed more than once).

// ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']

// 1. create an empty result array to store the players
// 2. loop the array to check each obj.winner and obj.loser
// 2.1 if it is not in the result array, store the winner's name
// 2.2 if it is in the result array, skip
// 3. return the result array

// function players(matches){
//   const playerNames = [];

//   matches.forEach(match => {
//     if(!playerNames.includes(match.winner)){
//       playerNames.push(match.winner);
//     }
//     if(!playerNames.includes(match.loser)){
//       playerNames.push(match.loser);
//     }
//   });

//   return playerNames;
// }

function players(matches) {
  const playerNames = new Set(); //Set object stores unique values

  matches.forEach(match => {
    playerNames.add(match.winner);
    playerNames.add(match.loser);
  });

  return Array.from(playerNames); // convert the Set back into an array
}

console.log(players(matches));
