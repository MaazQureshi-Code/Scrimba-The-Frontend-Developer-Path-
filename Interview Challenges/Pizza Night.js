/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/ 

const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj){
     let winner = null;
  let max = -Infinity;
  for (const key in obj){
    if (obj[key] > max){
      max = obj[key];
      winner = key;
    }
  }
  return "The winner is " + winner + " With " + obj[winner] + " votes!";

}

console.log(findTheWinner(gameNightFood));