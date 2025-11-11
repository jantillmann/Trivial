import { Link } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add_questions } from '../slices/questionSlice';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const dispatch = useDispatch();
  const questions = useSelector((store) => store.questionSlice.questions);
  const questionStyling =
    'text-white text-center text-lg font-semibold px-10 py-4 m-5 bg-gradient-to-r from-[#3754e8] to-[#6bb4ff] border border-[#9cc2ff] shadow-[0_0_18px_rgba(90,140,255,0.75)] [clip-path:polygon(40px_0%,calc(100%-40px)_0%,100%_50%,calc(100%-40px)_100%,40px_100%,0%_50%)]';

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=5`)
      .then((response) => response.json())
      .then((data) => dispatch(add_questions(data.results)));
  }, []);

  console.log(questions);
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 bg-black p-40">
        {/* <button
          onClick={() => clickHandler()}
          className={questionStyling}
          to="/question"
        >
          Get Questions by API
        </button> */}
        {questions.length > 0 ? (
          <Link className={questionStyling} to="/question/1">
            Start the Quiz
          </Link>
        ) : (
          <>We are collecting the data...</>
        )}
      </div>
    </>
  );
};

export default Homepage;
