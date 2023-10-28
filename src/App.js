import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

class APP2 extends App{
  state = {
    showMessage: false
  }
  onButtonClickHandler = () => {
   this.setState({showMessage: true});
  };

  render(){ 
    return(<div className="App">
     {this.state.showMessage && <p>Hi</p>}
      <button onClick={this.onButtonClickHandler}>Enter</button>
    </div>);

  }
}

function MyButton() {
  return (
    <button>Press Me</button>
  );
}



