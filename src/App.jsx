import { useState } from "react";
import "./App.css";

function App() {
  let [글제목이, 글제목변경타] = useState([
    "남자 코트 추천",
    "맛집추천",
    "리액트스터디",
  ]);

  let [따봉, 따봉변경] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(1);
  let [입력값, 입력값변경] = useState("");

  // [1, 2, 3].map(function (a) {
  //   return "123211";
  // });

  const 입력변경 = () => {
    const copy = [...글제목이];
    copy.unshift(입력값);
    글제목변경타(copy);

    console.log();
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>블로그이다!!</h4>
      </div>
      <input
        type="text"
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <button onClick={입력변경}>입력버튼</button>
      {/* 어떤 작명도 되지만 보통은 e(이벤트라고 부름)라고 적음 */}

      {/* //onChange 유저가 입력창을 조작할 때 해주는 거, onInput(유사품)*/}

      {글제목이.map((작명, a) => {
        return (
          <div className="list" key={a}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(a);
              }}
            >
              {글제목이[a]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[a] = copy[a] + 1;
                  따봉변경(copy);
                }}
              >
                👌
              </span>
              좋아요 {따봉[a]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...글제목이];
                copy.splice(a, 1);
                글제목변경타(copy);
              }}
            >
              삭제
            </button>
            {/* 데이터베이스가 없으면 안 됨 splice를 사용하지 못함. */}
          </div>
        );
      })}

      {modal === true ? (
        <Modal
          title={title} // 내용을 전달할 때는 state의 이름을 적음
          글제목변경타={글제목변경타} // 변경할 값을 전달할 때는 setState를 읽어줌.
          color="yellow"
          글제목이={글제목이}
        />
      ) : null}
    </div>
  );
  //삼항연산자로 모달이 참일 때 모달을 보여주고 아니라면 널
  //동적 UI 만드는 법
  //1. html css로 미리 디자인 완성
  //2. UI현재 상태를 state로 저장
  //3. state에 따라 UI가 어떻게 보일지 조건문 등으로 작성
}

// const Modawl = () => {
//   return <div></div>;}

//이런 식으로도 만들어도 됨.

function Modal(props) {
  const { 글제목이, 글제목변경타 } = props;
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{글제목이}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          글제목변경타(["여자 코트 추천", "맛집추천", "리액트스터디"]);
        }}
      >
        글제목 변경
      </button>
    </div>
  );
}

//props 사용법
//1.<자식컴포넌트 작명={state이름}>
//2.props 파라미터 등록후 props.작명 사용

export default App;
