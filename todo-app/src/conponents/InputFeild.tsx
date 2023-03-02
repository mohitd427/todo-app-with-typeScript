import React,{useRef} from 'react'
import "./inputStyle.css"

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent) => void;
}



const InputFeild = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
      <div>
          <form action="" className="input" onSubmit={(e) => {
              handleAdd(e)
              inputRef.current?.blur();
          }
          }>
              <input
                  ref={inputRef}
                  type="input"
                  placeholder='Enter a Todo'
                  className='input__box'
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)} />
              <button
                  className="input__submit"
                  type='submit'> ADD </button>
          </form>
    </div>
  )
}

export default InputFeild