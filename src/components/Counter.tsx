import { useState } from "react";
import style from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div className={style.counter}>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}