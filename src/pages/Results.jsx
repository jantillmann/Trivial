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
          <div className="flex items-center justify-center">
            <div>
              <img
                className="h-15 w-15"
                src={
                  question.isCorrect === true
                    ? '../src/assets/right.png'
                    : '../src/assets/wrong.png'
                }
              />
            </div>
            <div className="questionStyling">
              {question.isCorrect === true ? (
                <div>
                  <p className="text-3xl font-bold">Your answer was right!</p>
                </div>
              ) : (
                <p className="text-3xl font-bold">Your answer was wrong!</p>
              )}

              <p className="text-xl font-bold">The question was</p>
              <p
                className="font-light"
                dangerouslySetInnerHTML={{ __html: question.question }}
              />
              <p className="text-xl font-bold">Your Answer was:</p>
              <p
                className="font-light"
                dangerouslySetInnerHTML={{ __html: question.usersanswer }}
              />

              {question.isCorrect === false ? (
                <div>
                  <p className="text-xl font-bold">
                    The right answer should be:
                  </p>
                  <p
                    className="font-light"
                    dangerouslySetInnerHTML={{ __html: question.rightAnswer }}
                  />
                </div>
              ) : null}
              <></>
            </div>
          </div>
        );
      })}

      <div className="flex justify-center">
        <Link to="/" className="questionStyling">
          Start again
        </Link>
      </div>
    </div>
  );
};
export default Results;
