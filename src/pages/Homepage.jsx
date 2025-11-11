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

  function clickHandler() {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((response) => response.json())
      .then((data) => {
        dispatch(add_questions(data.results));
        navigate('/question/0');
      })
      .catch(console.error);
  }

  console.log(questions);
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 bg-black p-40">
        <div className="questionStyling">
          Welcome to: Who Wants to Be a Millionaire?
        </div>
        <div className="selector text-white">
          <form className="questionStyling">
            <label for="difficulty">Choose the difficulty:</label>
            <select id="difficulty" name="difficulties">
              <option value="any">Any</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
              <option value="easy">Easy</option>
            </select>
          </form>
        </div>

        <button className="questionStyling" onClick={() => clickHandler()}>
          Start the Quiz!
        </button>
      </div>
    </>
  );
};

export default Homepage;
