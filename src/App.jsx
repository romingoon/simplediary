/* eslint-disable no-unused-vars */
import './App.css';
import DiaryEditor from './components/DiaryEditor';
import DiaryList from './components/DiaryList';

const dummyList = [
  {
    id: 1,
    author: '문승현',
    content: '리액트는 재밌다',
    emotion: 3,
    create_date: new Date().getTime(),
  },
  {
    id: 2,
    author: '문승현',
    content: '리액트는 어렵다',
    emotion: 3,
    create_date: new Date().getTime(),
  },
  {
    id: 3,
    author: '문승현',
    content: '리액트는 재미없다',
    emotion: 4,
    create_date: new Date().getTime(),
  },
  {
    id: 4,
    author: '문승현',
    content: '리액트는 재밌냐',
    emotion: 4,
    create_date: new Date().getTime(),
  },
];

function App() {
  return (
    <>
      <h2>
        <DiaryEditor />
        <DiaryList diaryList={dummyList} />
      </h2>
    </>
  );
}

export default App;
