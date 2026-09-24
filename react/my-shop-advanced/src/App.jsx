import { Card } from "./components/Card/Card";
import "./App.scss";

export const App = () => {
  return (
    <div className="App">
      <h1>My-Shop</h1>

      <Card
        title="Pizza"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            saepe placeat? Eligendi aperiam natus cupiditate delectus autem
            modi. Exercitationem, voluptatibus!"
        price={1}
      />
      <Card
        title="Chocolate"
        text="Provident quos ut dignissimos dicta voluptatum itaque asperiores
            commodi adipisci! Ipsa qui ut rem nulla. Minima possimus ad cum
            voluptatibus!"
        price={10.988765}
      />
      <Card
        title="Banana"
        text="Accusantium hic voluptates laboriosam quia expedita adipisci labore!
            Explicabo nulla dolor mollitia enim nobis nisi accusamus iusto
            neque, architecto pariatur!"
        price={1.8976}
      />
    </div>
  );
};

export default App;
