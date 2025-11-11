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
      //   console.log('Richtig');
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

  //   dispatch(add_todos_to_list(data));

  const allquestions = useSelector((store) => store.questionSlice.questions);

  console.log(allquestions);

  const actualquestion = useSelector(
    (store) => store.questionSlice.questions[questionId]
  );
  const allanswers = [
    ...actualquestion.incorrect_answers,
    actualquestion.correct_answer,
  ];

  const answerStyling =
    'text-white text-center font-semibold px-8 py-3 bg-gradient-to-r from-[#3754e8] to-[#6bb4ff] shadow-[0_0_12px_rgba(80,120,255,0.7)] border border-[#89a9ff] [clip-path:polygon(28px_0%,calc(100%-28px)_0%,100%_50%,calc(100%-28px)_100%,28px_100%,0%_50%)]';
  const questionStyling =
    'text-white text-center text-lg font-semibold px-10 py-4 m-5 bg-gradient-to-r from-[#3754e8] to-[#6bb4ff] border border-[#9cc2ff] shadow-[0_0_18px_rgba(90,140,255,0.75)] [clip-path:polygon(40px_0%,calc(100%-40px)_0%,100%_50%,calc(100%-40px)_100%,40px_100%,0%_50%)]';
  
  return (
    <div className="pagewrapper flex flex-col items-center justify-center bg-black p-10">
      <div className="questionwrapper m-5 flex w-[70%] flex-col items-center bg-black">
        <div className="mb-3 flex gap-4">
          <div className="flex items-center gap-2 rounded-full border border-[#6ba0ff]/40 bg-[#1a2a8a]/60 px-4 py-1.5 text-sm font-medium text-white shadow-[0_0_10px_rgba(50,90,255,0.4)]">
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

        <div className={questionStyling}>
          {' '}
          <p dangerouslySetInnerHTML={{ __html: actualquestion.question }} />
        </div>

        <div className="answers m-5 grid w-7/8 grid-cols-2 grid-rows-2 items-center gap-2 text-white">
          {allanswers.map((answer) => {
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
                  className={answerStyling}
                >
                  {answer}
                </div>
              </Link>
            );
          })}

          {/* <div className={answerStyling}>Frage 1</div>
          <div className={answerStyling}>Frage 2</div>
          <div className={answerStyling}>Frage 3</div>
          <div className={answerStyling}>Frage 4</div> */}
        </div>
      </div>
    </div>
  );
};

export default Question;
