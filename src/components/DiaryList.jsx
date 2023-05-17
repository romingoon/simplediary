/* eslint-disable react/prop-types */

import DiaryItem from './DiaryItem';

/* eslint-disable react/jsx-key */
const DiaryList = ({ diaryList }) => {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h1>DiaryList</h1>
      <h4>{diaryList.length}개의 일기가 있습니다!</h4>
      <div>
        {diaryList.map((el) => (
          <DiaryItem key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
