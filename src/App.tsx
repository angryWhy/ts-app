import Button,{ButtonType,ButtonSize} from "./components/Button/button";
function App() {
  return (
    <div className="App">
      <Button>Hello</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com/">Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
    </div>
  );
}

export default App;
