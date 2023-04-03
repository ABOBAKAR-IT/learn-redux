import { useSelector } from "react-redux"
export default function Counter()
{
    const count=useSelector(state=>state)
    return (
        <div className="App">
        <h2>{count}</h2>
        </div>
    )
}
