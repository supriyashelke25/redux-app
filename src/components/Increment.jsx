import { useDispatch } from "react-redux"
import { incrementValue } from "../features/counterSlice";

const Increment = () => {

    const dispatch = useDispatch();

    // const handleIncrement = () => {
    //     dispatch(incrementValue())
    // }

    return (
        <div>
            <button type="button" className='bg-blue-400 rounded-2xl p-2 text-3xl cursor-pointer' onClick={() => dispatch(incrementValue())}> Increment </button>
        </div>
    )
}

export default Increment