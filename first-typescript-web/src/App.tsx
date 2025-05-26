import CardDetails from "./pages/CardDetails";
import MyPopper from "./pages/Mypopper";
import NewPage from "./pages/NewPage";


function App() {

  const person = {
    name : "Tin",
    regularFunct: function(){
      console.log(this.name);
    },
    arrowfunct: () => {
      console.log(person.name);
    }
  }

  person.regularFunct(); // Outputs: Tin
  person.arrowfunct(); // Outputs: undefined (because arrow functions do not have their own 'this')

  return (
    <div>
      <NewPage/>
      <MyPopper/>
      <CardDetails/>
    </div>
  );
}

export default App;