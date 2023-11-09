// This and following questions will now be about writing logic using (pseudo) JavaScript on the "whiteboard".

// My friend Lee is a fan of foosball (insert/use another 1-on-1 game here). Lee plays in an amateur foosball league, has asked us for help writing a program to understand player rankings.

// We're given some game outcome data like the following:

// [
//   { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
//   { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
//   { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
//   { winner: 'Elise', loser: 'Carol', loser_points: 4 },
//   { winner: 'Alice', loser: 'Carol', loser_points: 2 },
//   { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
//   { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
// ]
// Using the same data as the previous question, write a function that produces a data structure like the following, which lists each participant, and a list of who they've beaten.
// Output:

// {
//   'Alice': ['Bob', 'Carol'],
//   'Bob':   [],
//   'Carol': ['Dean'],
//   'Dean':  ['Elise'],
//   'Elise': ['Bob', 'Carol'],
// }
