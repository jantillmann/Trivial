import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const Results = () => {
  const resultsArr = useSelector((store) => store.resultsSlice.results);
  //   console.log(resultsArr);

  const points = () => {
    let counter = 0;
    resultsArr.map((question) => {
      console.log(question);
      if (question.isCorrect === true) {
        counter++;
      }
    });
    return counter;
  };

  console.log(points());

  return (
    <div className="pagewrapper flex flex-col justify-center bg-black p-5">
      <div className="Header text-white">
        <h1 className="text-center text-4xl">{`You have got ${points()} questions right. Here is your overview: `}</h1>
      </div>
      {resultsArr.map((question) => {
        return (
          <div className="m-3 bg-blue-300 p-3">
            <p>{`Your Question was: ${question.question}`}</p>
            <p>{`Your Answer was: ${question.usersanswer}`}</p>
            <p> {`Your Answer was correct: ${question.isCorrect}`}</p>
            {question.isCorrect === false ? (
              <p>{`The right answer should be: ${question.rightAnswer}`}</p>
            ) : (
              <></>
            )}
          </div>
        );
      })}

      <div>
        <Link to="/" className="w-1/4 bg-blue-300 p-3 text-center text-white">
          Start again
        </Link>
      </div>
    </div>
  );
};
export default Results;
