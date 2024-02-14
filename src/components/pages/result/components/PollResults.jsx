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
    <>
    <div className='relative h-screen'>
      <h1 className="text-3xl text-center font-bold mb-8 pt-28">Poll Results</h1>
      <div className='grid max-[800px]:grid-rows-2 min-[800px]:grid-cols-2'>
        <div className='flex justify-center'>

        <section className='relative w-[90%] min-w-[450px] max-w-[650px] flex flex-col bg-white p-10 px-10 xl:px-16 rounded-3xl border-2 border-slate-100 drop-shadow-md'>
            <header className='text-2xl font-bold'>{poll.topic}</header>
            <p className='text-sm my-2 mb-6'>Created By <span className='font-[700]'>{poll.created_by}</span></p>
            {voteShareData.map((choice, index) => (
                <div className={`cursor-pointer border-2 border-solid drop-shadow-md rounded-md my-4 flex flex-row p-4 text-white`} style={{backgroundColor:choice.color}}>{choice.choice}</div>
            ))}
            {/* <div className={`cursor-pointer border-2 border-solid drop-shadow-md rounded-md my-4 flex flex-row p-4 text-white`} style={{backgroundColor:data[0].color}}>Visual Studio Code</div>
            <div className={`cursor-pointer border-2 border-solid drop-shadow-md rounded-md my-4 flex flex-row p-4 text-white`} style={{backgroundColor:data[1].color}}>Visual Studio Code</div>
            <div className={`cursor-pointer border-2 border-solid drop-shadow-md rounded-md my-4 flex flex-row p-4 text-white`} style={{backgroundColor:data[2].color}}>Visual Studio Code</div>
            <div className={`cursor-pointer border-2 border-solid drop-shadow-md rounded-md my-4 flex flex-row p-4 text-white`} style={{backgroundColor:data[3].color}}>Visual Studio Code</div> */}
        </section>
            </div>
        <section className='flex justify-center place-items-center'>
          <div className='sm:w-[350px] sm:h-[350px] xl:w-[400px] xl:h-[400px]'>
          <PieChart
            data={voteShareData.map(entry => ({
                title: entry.choice,
                value: entry.votes,
                color: entry.color
            }))}
            label={({ dataEntry }) => `(${(dataEntry.value / totalVotes * 100).toFixed(2)}%)`}
            labelStyle={(index) => ({
                fill: '#000000',
                fontSize: '5px',
                fontFamily: 'sans-serif',
            })}
            />
          </div>
        </section>
      </div>
    </div>
    {/* <div>
      <h1 className="text-3xl font-bold mb-8">Poll Results</h1>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">{poll.topic}</h2>
        <div className="list-disc pl-4">
          {voteShareData.map(choice => (
            <div className={`bg-${choice.color.slice(1)}`} key={choice._id}>{choice.choice}</div>
          ))}
        </div>
        <p className="mt-4">
          Creator: {poll.created_by}
        </p>
        <p>
          Total Voters: {totalVotes}
        </p>
      </div>
      
      <div style={{ height: '300px', width:'300px' }}>
        {console.log(voteShareData)}
        <PieChart
          data={voteShareData.map(entry => ({
            title: entry.choice,
            value: entry.votes,
            color: entry.color
          }))}
          label={({ dataEntry }) => `(${(dataEntry.value / totalVotes * 100).toFixed(2)}%)`}
          labelStyle={(index) => ({
            fill: '#000000',
            fontSize: '5px',
            fontFamily: 'sans-serif',
          })}
        />
      </div>
    </div> */}
    </>
  );
}

export default PollResults;

