import React, { useState } from 'react';
import MyCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./assets/styleForCalendar.css";

function Calendar() {
  const weddingDay = useState(new Date(2023, 5 - 1, 27));
  const weddingDay2 = new Date("2023-05-27");
  const today = new Date();
  const diff = weddingDay2.getTime() - today.getTime();
  const diffDay = Math.floor(diff / (1000*60*60*24));

  return (
    <div>
      <h2>결혼식 까지 {diffDay}일 남음</h2>

    <div>
      <MyCalendar 
      defaultValue = {weddingDay}
      value = {weddingDay}
      showNeighboringMonth={false}
      locale = "en"
      />
    </div>

    <div>
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
          <td>1</td>
          <td>2</td>
      </tr>
      <tr>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td class = "weddingDay">9</td>
      </tr>
      <tr>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
      </tr>
      <tr>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>21</td>
          <td>22</td>
          <td>23</td>
      </tr>
      <tr>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          <td>27</td>
          <td>28</td>
          <td>29</td>
          <td>30</td>
      </tr>
  </table>
    </div>
    </div>
    
  );
}

export default Calendar;