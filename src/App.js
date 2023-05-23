// import logo from './logo.svg';
import './App.css';
import ChangeEvent from './component/chap01_event/ChangeEvent';
// import SayHello from './SayHello';
import ClickEvent from './component/chap01_event/ClickEvent';
import SubmitEvent from './component/chap01_event/SubmitEvent';
import Counter from './component/chap03/Counter';
import NickName from './component/chap03/NickName';
import FoodList from './component/chop02_props/FoodList';


function App() {

  // const looping = () => {
  //   const helloList = [];
  //   for(let i = 0; i<5; i++){
  //     helloList.push(<SayHello />);
  //   }
  //   return helloList;
  // }
  // jsx문법에서는 스크립트 코드를 직접 사용불가능
  // {} 안에서는 함수호출문이나 변수 참조를 할 수 있음

  return (
    <>
      <Counter />
    </>
  );
}

export default App;
