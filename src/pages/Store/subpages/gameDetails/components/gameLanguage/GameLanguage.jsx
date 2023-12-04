import React from "react";
import "./gamelanguage.css";
import check from "/assets/constants/check.svg";
const GameLanguage = () => {
  return (
    <div className="languages" role="region" tabIndex="0">
      <h3>Languages</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Interface</th>
            <th>Subtitles</th>
            <th>Full Audio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>English</td>
            <td>
              <img src={check} alt="check mark" />
            </td>
            <td>
              <img src={check} alt="check mark" />
            </td>
            <td>
              <img src={check} alt="check mark" />
            </td>
          </tr>
          <tr>
            <td>French</td>
            <td>
              <img src={check} alt="check mark" />
            </td>
            <td>
              <img src={check} alt="check mark" />
            </td>
            <td>
              <img src={check} alt="check mark" />
            </td>
          </tr>
          <tr>
            <td>Italian</td>
            <td>
              <img src={check} alt="check mark" />
            </td>
            <td>
              <img src={check} alt="check mark" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>German</td>
            <td>
              <img src={check} alt="check mark" />
            </td>
            <td>
              <img src={check} alt="check mark" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Spanish - Spain</td>
            <td>
              <img src={check} alt="check mark" />
            </td>
            <td>
              <img src={check} alt="check mark" />
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GameLanguage;
