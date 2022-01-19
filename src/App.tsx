import Button,{ButtonType,ButtonSize} from "./components/Button/button";
import Menu from './components/Menu/Menu';
import MenuItem from "./components/Menu/MenuItem";
function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0} onSelect={(index)=>{console.log(index);
      }}>
        <MenuItem index={0}>
        cool link 1
        </MenuItem>
        <MenuItem index={1}>
        cool link 2
        </MenuItem>
      </Menu>
      <Button btnType={ButtonType.Default}>Hello</Button>
      <Button btnType={ButtonType.Link} disabled href="https://www.baidu.com/">Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} >Hello</Button>
    </div>
  );
}

export default App;
