import { useSelector } from "react-redux"

const DisplayValue = () => {

    const count = useSelector(state => state.counter.value);

  return (
    <div className='text-8xl'>{count}</div>
  )
}

export default DisplayValue