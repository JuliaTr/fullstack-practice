import { Header } from './components/Header/Header';
import './App.scss';

export const App = () => (
  <div className="App">
    <label htmlFor=""></label>
    <h1>My Page</h1>
    <Header />
  </div>
);

// Example:
// export const App = () => (
//   // Return react component
//   <h1>New text</h1>
// );

// // same as above
// const App = () => {
//   console.log(123);

//   return (
//     // Return react component
//     <h1>New text</h1>
//   );
// };

// same as above
// function App() {
//   return (
//     // Return component
//     <h1>New text</h1>
//   );
// }
