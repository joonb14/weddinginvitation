import React from "react";

import "./assets/reset.css";
import "./assets/content.css";

function Text(props){
  return (
    <div className="Text">
      <div className="paragraph">
        <p>각자 서로 다른 길을</p>
        <p>걸어온 저희가 이제 부부의 연으로</p>
        <p>한 길을 걸어가고자 합니다.</p>
      </div>
      <div className="paragraph">
        <p>항상 처음을 생각하며,</p>
        <p>서로 아껴주고 사랑하며 살겠습니다.</p>
      </div>
      <div className="paragraph">
        <p>부디 참석해 주시어 저희의 약속을</p>
        <p>따뜻한 격려로 축복해 주시기 바랍니다.</p>
      </div>
    </div>
  );
}

function Information(props){
  return (
    <div className="Information">
      <div>
        김민수 · 김예인
        <span className="smallFont">
          의 
          <span className="textBox">
            아들
          </span>
        </span>
        현수
      </div>
      <div>
        김민우 · 황선영
        <span className="smallFont">
          의 
          <span className="textBox">
            딸
          </span>
        </span>
        아연
      </div>
    </div>
  );
}

function Location(props){
  return (
    <div className="Location">
      <p>2023.04.08 토요일 오후 2:30</p>
      <p>라마다서울신도림호텔</p> 
      <p>5층 세인트그레이스홀</p>
    </div>
  );
}

function Content() {
  
  return (
    <div className="Content">
      <Text></Text>
      <Information></Information>
      <Location></Location>
    </div>
  );
}

export default Content;