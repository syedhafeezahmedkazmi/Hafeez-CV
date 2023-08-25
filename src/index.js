import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function Hi() {
  return<div className="container">
  <div className="header">
    <h1 className="name">Syed Hafeez Kazmi</h1>
    <p className="role">Web Developer</p>
    <p className="contact">Email: hafeezkazmi870@gmail.com</p>
    <p className="contact">Phone: (+92) 306-2354880</p>
  </div>
  <div className="section">
      <h2>Education</h2>
      <p>Bachelor of Science in Computer Science</p>
      <p>University of Karachi</p>
  </div>
  <div className="section">
  <h2>Experience</h2>
  <p>Web Developer Intern</p>
  <p>ABC Tech Solutions</p>
  <p>June 2018 - Current</p>
  <ul>
    <li>Assisted in building responsive web applications.</li>
    <li>Collaborated with team members to achieve project goals.</li>
    <li>Implemented new features and fixed bugs in existing projects.</li>
  </ul>
</div>
  <div className="section">
  <h2>Skills</h2>
  <ul>
    <li>JavaScript (ES6+)</li>
    <li>React.js</li>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>Version Control (Git)</li>
  </ul>
</div>
</div>
}

// const PersonalInfo = () => (

// );

// const Education = () => (

// );

// const Experience = () => (

// );

// const Skills = () => (

// );

// function App() {
//   return (
//     <div className="cv">
//       <PersonalInfo />
//       <Education />
//       <Experience />
//       <Skills />
//     </div>
//   );
// }

ReactDOM.render(<Hi/>, document.querySelector('#root'));

// function Hi() {
//   return <div>
      
//   </div>
// }

// ReactDOM.render(<Hi/>,document.querySelector('#root'))

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
