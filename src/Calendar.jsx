import React from 'react';
// import MyCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./assets/styleForCalendar.css";

function TableCalendar() {
  return (
    <div className='tableCalendar'>
      <table class="april">
        <tr>
            <th scope="col">SUN</th>
            <th scope="col">MON</th>
            <th scope="col">TUE</th>
            <th scope="col">WED</th>
            <th scope="col">THU</th>
            <th scope="col">FRI</th>
            <th scope="col">SAT</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td class = "weddingDay">8</td>
        </tr>
        <tr>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
        </tr>
        <tr>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>21</td>
          <td>22</td>
        </tr>
        <tr>
          <td>23</td>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          <td>27</td>
          <td>28</td>
          <td>29</td>
        </tr>
        <tr>
          <td>30</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  )
}

function Calendar() {
  const weddingDay = new Date("2023-04-08");
  const today = new Date();
  var diff = weddingDay.getTime() - today.getTime();
  var condString1, condString2;
  if (diff < 0) 
  {
    condString1 = "으로 부터";
    condString2 = "지남";
  }
  else 
  {
    condString1 = "까지";
    condString2 = "남음"
  };
  diff = Math.abs(diff);
  const diffDay = Math.floor(diff / (1000*60*60*24));

  return (
    <div className='calendar'>
      <div className='dateString'>
        <h2>결혼식{condString1} {diffDay}일 {condString2}</h2>
      </div>

      {/* <div>
        <MyCalendar 
        defaultValue = {weddingDay}
        value = {weddingDay}
        showNeighboringMonth={false}
        locale = "en"
        />
      </div> */}

      <TableCalendar></TableCalendar>
    </div>
    
  );
}

export default Calendar;