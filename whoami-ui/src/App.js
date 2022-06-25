import { Container } from "@mui/system";
import "./App.css";

import QuestionGame from "./components/QuestionGame";

function App() {
  const questions = [
    {
      value: "Duck",
      image:
        "https://img.freepik.com/free-vector/cute-duck-drake-white-background-vector-image-flat-style_501614-425.jpg?w=2000",
    },
    {
      value: "Frog",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxWhxsujanC-d2Jrl5UtbtMSHhL76Tm2j1w&usqp=CAU",
    },
    {
      value: "Rabbit",
      image:
        "https://www.charlotte.providencevets.com/files/providence-animal-hospital-charlotte-are-rabbits-rodents-blog.jpeg",
    },
    {
      value: "Fish",
      image:
        "https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2-500x289.jpg",
    },
    {
      value: "Lion",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg/500px-Lion_%28Panthera_leo%29_male_6y.jpg",
    },
    {
      value: "Elephant",
      image:
        "https://worldbirds.com/wp-content/uploads/2020/05/elephant-symbolism6.webp",
    },
    {
      value: "Snake",
      image:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/138D3/production/_122938008_gettyimages-574901555.jpg",
    },
    {
      value: "Monkey",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Vervet_Monkey_%28Chlorocebus_pygerythrus%29.jpg/800px-Vervet_Monkey_%28Chlorocebus_pygerythrus%29.jpg?20181109194254",
    },
  ];

  return (
    <div className="App">
      <Container>
        <QuestionGame questions={questions} />
      </Container>
    </div>
  );
}

export default App;
