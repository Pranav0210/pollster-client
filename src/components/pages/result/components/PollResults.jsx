import React from 'react';
// Import the PieChart component
import { PieChart } from 'react-minimal-pie-chart'; 

function PollResults({ poll, voteData }) {
  // Hardcoded vote share data
  console.log("hey",voteData)
  const voteShareData = voteData.vote_share;
  const totalVotes = voteData.total_votes

  function generateRandomColor() {
    // Generate a random hexadecimal color code
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  
  function addRandomColorToChoices(choicesArray) {
    // Loop through each object in the array
    choicesArray.forEach((choiceObj) => {
      // Add a new property 'color' with a random color value to each object
      choiceObj.color = generateRandomColor();
    });
  }

  addRandomColorToChoices(voteShareData)
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Poll Results</h1>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">{poll.topic}</h2>
        <ul className="list-disc pl-4">
          {poll.choices.map(choice => (
            <li key={choice._id}>{choice.text}</li>
          ))}
        </ul>
        <p className="mt-4">
          Creator: {poll.created_by}
        </p>
        <p>
          Total Voters: {totalVotes}
        </p>
      </div>
      {/* Infographic to visualize vote sharing */}
      <div style={{ height: '300px' }}>
        <PieChart
          data={voteShareData}
          label={({ dataEntry }) => `${dataEntry.choice}: ${(dataEntry.votes / totalVotes * 100).toFixed(2)}%`}
          labelStyle={(index) => ({
            fill: voteShareData[index].color,
            fontSize: '10px',
            fontFamily: 'sans-serif',
          })}
          radius={50} // Set the radius value
          labelPosition={100}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}

export default PollResults;

