import "./App.css";
import React, { Fragment, useState } from "react";
import quiz from './quiz.jpg';
import swal from "sweetalert";

const App = () => {
  const questions = [
    {
      questionText: "What is The Capital of India ?",
      AnswerOptions: [
        {
          answerText: "Delhi",
          isTrue: true,
        },
        {
          answerText: "India",
          isTrue: false,
        },
        {
          answerText: "Jammu & Kashmir",
          isTrue: false,
        },
        {
          answerText: "Utharakand",
          isTrue: false,
        },
      ],
    },
    {
      questionText: "How Many Wonders are there In The World?",
      AnswerOptions: [
        {
          answerText: 1,
          isTrue: false,
        },
        {
          answerText: 3,
          isTrue: false,
        },
        {
          answerText: 7,
          isTrue: true,
        },
        {
          answerText: 10,
          isTrue: false,
        },
      ],
    },
    {
      questionText: "Who was the first Indian woman in Space?",
      AnswerOptions: [
        {
          answerText: "Kalpana Chawla",
          isTrue: true,
        },
        {
          answerText: "Sunita Williams",
          isTrue: false,
        },
        {
          answerText: "Koneru Humpy",
          isTrue: false,
        },
        {
          answerText: "None of the above",
          isTrue: false,
        }
      ],
    },
    {
      questionText: "Who wrote the Indian National Anthem?",
      AnswerOptions: [
        {
          answerText: "Bakim Chandra Chatterji",
          isTrue: false,
        },
        {
          answerText: "Rabindranath Tagore",
          isTrue: true,
        },
        {
          answerText: "Swami Vivekanand",
          isTrue: false,
        },
        {
          answerText: "Bal gangadhar Tilak",
          isTrue: false,
        }
      ],
    },
    {
      questionText: "Who was the first Man to Climb Mount Everest Without Oxygen?",
      AnswerOptions: [
        {
          answerText: "Junko Tabei",
          isTrue: false,
        },
        {
          answerText: "Reinhold Messner",
          isTrue: false,
        },
        {
          answerText: "Peter Habeler",
          isTrue: false,
        },
        {
          answerText: "Phu Dorji",
          isTrue: true,
        }
      ],
    },
    {
      questionText: "Who was the first President of India?",
      AnswerOptions: [
        {
          answerText: "Abdul Kalam",
          isTrue: false,
        },
        {
          answerText: "Lal Bahadur Shastri",
          isTrue: false,
        },
        {
          answerText: "Dr. Rajendra Prasad",
          isTrue: true,
        },
        {
          answerText: "Zakir Hussain",
          isTrue: false,
        }
      ],
    },
    {
      questionText: "Who is the first Indian to win a Nobel Prize?",
      AnswerOptions: [
        {
          answerText: "Rabindranath Tagore",
          isTrue: true,
        },
        {
          answerText: "CV Raman",
          isTrue: false,
        },
        {
          answerText: "Mother Theresa",
          isTrue: false,
        },
        {
          answerText: "Hargobind Khorana",
          isTrue: false,
        }
      ],
    },
    {
      questionText: "Which was the world's first successful electronic computer?",
      AnswerOptions: [
        {
          answerText: "PARAM",
          isTrue: false,
        },
        {
          answerText: "CRAY-1",
          isTrue: false,
        },
        {
          answerText: "Pascaline",
          isTrue: false,
        },
        {
          answerText: "ENIAC",
          isTrue: true,
        }
      ],
    },
    {
      questionText: "Select the example of application software of computer?",
      AnswerOptions: [
        {
          answerText: "Ms Word",
          isTrue: false,
        },
        {
          answerText: "Ms Excel",
          isTrue: false,
        },
        {
          answerText: "Both A and B",
          isTrue: true,
        },
        {
          answerText: "MS-DOS",
          isTrue: false,
        }
      ],
    },
    {
      questionText: "Who was the first Indian in space ?",
      AnswerOptions: [
        {
          answerText: "Vikram Ambalal",
          isTrue: false,
        },
        {
          answerText: "Ravish Malhotra",
          isTrue: false,
        },
        {
          answerText: "Rakesh Sharma",
          isTrue: true,
        },
        {
          answerText: "Nagapathi Bhat",
          isTrue: false,
        }
      ],
    }
  ];
  const [currentquestion, setcurrentquestion] = useState(0);
  const [selectedanswer, setselectedanswer] = useState("");
  var useStateRef=require('react-usestateref');
  var [score, setscore,scoreref] = useStateRef(0);
  const SubmitResponse = () => {
    checkcorrectanswer();
    let message = "Great job!";
    if (score === 0) {
      message = "Sorry!";
      swal(message, `Your Score is ${scoreref.current}`, "error", {
        button: "Play Again!",
      });
    } else {
      swal(message, `Your Score is ${scoreref.current}`, "success", {
        button: "Play Again!",
      });
    }
    setcurrentquestion(0);
    setselectedanswer("");
    clearOtherOptions();
    setscore(0);
  };
  const checkcorrectanswer = () => {
    questions[currentquestion].AnswerOptions.map((answer) => {
      if (answer.answerText.toString() === selectedanswer) {
        if (answer.isTrue) {
          setscore(score + 1);
        }
      }
      return "";
    });
  };
  const handlenextquestion = () => {
    checkcorrectanswer();
    let newquestion = currentquestion + 1;
    setcurrentquestion(newquestion);
    setselectedanswer("");
    clearOtherOptions();
  };
  const handlepreviousquestion = () => {
    if(window.confirm("This will clear the current response")){
    setscore(score-1);
    setcurrentquestion(currentquestion - 1);
    setselectedanswer("");
    clearOtherOptions();
    }
  };
  const selectedOption = (e) => {
    setselectedanswer(e.target.lastChild.data);
    clearOtherOptions();
    e.target.classList.add("selected");
  };
  const clearOtherOptions = () => {
    const answersselected = document.querySelectorAll(".selected");
    if (answersselected.length >= 1) {
      answersselected.forEach((data) => {
        data.classList.remove("selected");
      });
    }
  };
  return (
    <Fragment>
      <div className="bubble-1"></div>
      <div className="bubble-2"></div>
      <div className="bubble-3"></div>
      <div className="bubble-4"></div>
      <div className="score">
        Score : <span>{scoreref.current}</span>
      </div>
      <div className="question-no">
        Question : {currentquestion + 1}/{questions.length}
      </div>
      <div className="outer-most-square">
        <div className="inner-square">
          <div className="inner-most-square">
            <div className="question-area">
              {questions[currentquestion].questionText}
              <img src={quiz} alt="..." className="image"/>
            </div>
            <div className="option-1" onClick={selectedOption}>
              <div className="option-a">A</div>
              {questions[currentquestion].AnswerOptions[0].answerText}
            </div>
            <div className="option-2" onClick={selectedOption}>
              <div className="option-b">B</div>
              {questions[currentquestion].AnswerOptions[1].answerText}
            </div>
            <div className="option-3" onClick={selectedOption}>
              <div className="option-c">C</div>
              {questions[currentquestion].AnswerOptions[2].answerText}
            </div>
            <div className="option-4" onClick={selectedOption}>
              <div className="option-d">D</div>
              {questions[currentquestion].AnswerOptions[3].answerText}
            </div>
            {selectedanswer !== "" &&
              (currentquestion !== questions.length - 1 ? (
                <button className="btn-text" onClick={handlenextquestion}>
                  NEXT
                </button>
              ) : (
                <button className="btn-text" onClick={SubmitResponse}>
                  Submit
                </button>
              ))}
            {currentquestion !== 0 && (
              <button className="go-back" onClick={handlepreviousquestion}>
                <i className="fas fa-arrow-alt-circle-left fa-3x"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
