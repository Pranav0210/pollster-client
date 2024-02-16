import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faComments } from '@fortawesome/free-solid-svg-icons';

import { SelectedPollContext } from './Dashboard';

function PollItem({ pollid, topic, creator, tag }) {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false);
  const {selectedPoll, setSelectedPoll} = useContext(SelectedPollContext)
  function handleSelectedPollContext(){
    setSelectedPoll(pollid)
  }
  function navigateResults() {
    navigate(`/results/${pollid}`)
  }
  function navigatePollPage() {
    navigate(`/polls/${pollid}`)
  }

  return (
    <div className="border border-gray-300 rounded p-4 mb-4 flex items-center" onClick={handleSelectedPollContext} >
      <button onClick={navigateResults} className="mr-4 focus:outline-none z-10 hover:text-violet-500" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <FontAwesomeIcon icon={faChartSimple} className={`text-gray-600 ${isHovered ? 'hover:text-violet-500' : ''}`} />
      </button>
      <button onClick={navigatePollPage} className="mr-4 focus:outline-none z-10 hover:text-violet-500" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <FontAwesomeIcon icon={faComments} className={`text-gray-600 ${isHovered ? 'hover:text-violet-500' : ''}`} />
      </button>
      <div className="flex-grow">
        <h2 className="text-lg font-semibold">{topic}</h2>
        <p className="text-gray-600">Created by {creator}</p>
      </div>
      <span className="inline-block ml-auto bg-gray-200 text-gray-800 px-2 py-1 text-xs font-semibold rounded-full">
        {tag}
      </span>
    </div>
  );
}

export default PollItem;
