import "./App.scss";

export const App = () => {
  return (
    <div className="App">
      <h1>My-Shop</h1>

      <div className="Card">
        <h2 className="Card__title">Pizza</h2>
        <div className="Card__details">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            saepe placeat? Eligendi aperiam natus cupiditate delectus autem
            modi. Exercitationem, voluptatibus!
          </p>
        </div>
      </div>

      <div className="Card">
        <h2 className="Card__title">Chocolate</h2>
        <div className="Card__details">
          <p>
            Provident quos ut dignissimos dicta voluptatum itaque asperiores
            commodi adipisci! Ipsa qui ut rem nulla. Minima possimus ad cum
            voluptatibus!
          </p>
        </div>
      </div>

      <div className="Card">
        <h2 className="Card__title">Banana</h2>
        <div className="Card__details">
          <p>
            Accusantium hic voluptates laboriosam quia expedita adipisci labore!
            Explicabo nulla dolor mollitia enim nobis nisi accusamus iusto
            neque, architecto pariatur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
