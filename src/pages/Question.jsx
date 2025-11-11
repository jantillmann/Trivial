import { useParams, Link } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add_question } from '../slices/resultsSlice';

const Question = () => {
  const { questionId } = useParams();
  const dispatch = useDispatch();

  function clickHandler(value) {
    if (value === actualquestion.correct_answer) {
      dispatch(
        add_question({
          usersanswer: value,
          isCorrect: true,
          question: actualquestion.question,
          wrongAnswers: actualquestion.incorrect_answers,
          rightAnswer: actualquestion.correct_answer,
        })
      );
    } else {
      dispatch(
        add_question({
          usersanswer: value,
          isCorrect: false,
          question: actualquestion.question,
          wrongAnswers: actualquestion.incorrect_answers,
          rightAnswer: actualquestion.correct_answer,
        })
      );
    }
  }

  const allquestions = useSelector((store) => store.questionSlice.questions);

  console.log(allquestions);

  const actualquestion = useSelector(
    (store) => store.questionSlice.questions[questionId]
  );
  const allanswers = [
    ...actualquestion.incorrect_answers,
    actualquestion.correct_answer,
  ];

  //Straight from the internet ^^
  const shuffledAnswers = [...allanswers];

  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [
      shuffledAnswers[j],
      shuffledAnswers[i],
    ];
  }

  return (
    <div className="pagewrapper flex flex-col items-center justify-center bg-black p-10">
      <div className="questionwrapper m-5 flex w-[70%] flex-col items-center bg-black">
        <h2 className="my-5 text-4xl text-white">{`Question: ${questionId}/${allquestions.length - 1}`}</h2>
        <div className="mb-3 flex gap-4">
          <div className="metaStyling">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-blue-200"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v10a1 1 0 01-1.447.894L12 12.118l-6.553 2.776A1 1 0 014 14V4z" />
            </svg>
            {`Categorie: ${actualquestion.category}`}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[#6ba0ff]/40 bg-[#1a2a8a]/60 px-4 py-1.5 text-sm font-medium text-white shadow-[0_0_10px_rgba(50,90,255,0.4)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-blue-200"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a2 2 0 00-2 2v5H5l5 6 5-6h-3V4a2 2 0 00-2-2z" />
            </svg>
            {`Difficulty: ${actualquestion.difficulty}`}
          </div>
        </div>

        <div className="questionStyling">
          {' '}
          <p dangerouslySetInnerHTML={{ __html: actualquestion.question }} />
        </div>

        <div className="answers m-5 grid w-7/8 grid-cols-2 grid-rows-2 items-center gap-2 text-white">
          {shuffledAnswers.map((answer) => {
            return (
              <Link
                to={
                  parseInt(questionId) + 1 >= allquestions.length
                    ? '/results'
                    : `/question/${parseInt(questionId) + 1}`
                }
              >
                <div
                  onClick={() => clickHandler(answer)}
                  value={answer}
                  name={answer}
                  className="answerStyling"
                >
                  <p dangerouslySetInnerHTML={{ __html: answer }} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Question;
