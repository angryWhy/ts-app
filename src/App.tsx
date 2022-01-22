import Button,{ButtonType,ButtonSize} from "./components/Button/button";
import Menu from './components/Menu/Menu';
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from './components/Menu/SubMenuItem';
import { library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons"
import Icon from "./components/Icon/icon"
library.add(fas)
function App() {
  return (
    <div className="App">
      <Icon icon="arrow-down" theme="danger" size="10x"/>
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
