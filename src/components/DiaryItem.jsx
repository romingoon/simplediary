/* eslint-disable react/prop-types */
const DiaryItem = ({ id, author, content, emotion, create_date }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 {author} | 감정점수 : {emotion}
        </span>
        <br />

        <span className="date">
          작성일시 : {new Date(create_date).toLocaleString()}
        </span>
      </div>
      <div className="content">일기 내용 : {content}</div>
    </div>
  );
};

export default DiaryItem;
