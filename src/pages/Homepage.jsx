import { Link } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add_questions } from '../slices/questionSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = useSelector((store) => store.questionSlice.questions);
  const [difficulty, setDifficulty] = useState('');

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  function clickHandler() {
    fetch(`https://opentdb.com/api.php?amount=7&difficulty=${difficulty}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(add_questions(data.results));
        navigate('/question/1');
      })
      .catch(console.error);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 bg-black p-40">
        <div className="questionStyling">
          Welcome to: Who Wants to Be a Millionaire?
        </div>
        <div className="selector text-white">
          <form className="questionStyling hover:cursor-pointer">
            <label for="difficulty">Choose the difficulty:</label>
            <select
              className="hover:cursor-pointer"
              id="difficulty"
              name="difficulties"
              onChange={handleDifficultyChange}
            >
              <option value="any">Any</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
              <option value="easy">Easy</option>
            </select>
          </form>
        </div>

        <button
          className="questionStyling hover:cursor-pointer"
          onClick={() => clickHandler()}
        >
          Start the Quiz!
        </button>
      </div>
    </>
  );
};

export default Homepage;
