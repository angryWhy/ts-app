import Button,{ButtonType,ButtonSize} from "./components/Button/button";
import Menu from './components/Menu/Menu';
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from './components/Menu/SubMenuItem';
function App() {
  return (
    <div className="App">
      <Menu defaultIndex="0" onSelect={(index)=>{console.log(index);
      }} >
        <MenuItem>
        cool link 1
        </MenuItem>
        <MenuItem >
        cool link 2
        </MenuItem>
        <SubMenu title="dropdown">
        <MenuItem >
        cool link 1
        </MenuItem>
        <MenuItem >
        cool link 2
        </MenuItem>
        </SubMenu>
        <SubMenu title="dropdown">
        <MenuItem >
        cool link 1
        </MenuItem>
        <MenuItem >
        cool link 2
        </MenuItem>
        </SubMenu>
      </Menu>
      <Button btnType={ButtonType.Default}>Hello</Button>
      <Button btnType={ButtonType.Link} disabled href="https://www.baidu.com/">Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} >Hello</Button>
    </div>
  );
}

export default App;
