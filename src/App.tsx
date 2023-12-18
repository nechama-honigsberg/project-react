
import './App.css'
// import Conditions from './components/conditions'
// import ListState from './components/listState'
// import ToBuyList from './components/ToBuyList'
// import StyleComponent from './components/StyleComponent'
// import CounterHome from './redux/CounterHome'
import ShowItemsSlice from './redux/ShowItemsSlice';
import AddItemSlice from './redux/AddItemSlice';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ShowItemsSlice></ShowItemsSlice>
    <AddItemSlice></AddItemSlice>
    {/* <CounterHome /> */}
    {/* <StyleComponent></StyleComponent> */}
    {/* <Conditions></Conditions> */}
    {/* <ListState></ListState> */}
    {/* <ToBuyList></ToBuyList> */}
    </>
  )
}

export default App


