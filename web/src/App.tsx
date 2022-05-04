interface ButtonProps {
  // text: string;
  text?: string;
}

function Button(props: ButtonProps) {
  // return <button>{props.text}</button>
  return <button className="bg-violet-500 p-2 rounded hover:bg-slate-500">{props.text ?? 'Texto Inicial'}</button>
}


function App() {
  return (
    <div className="flex p-2 gap-2">
      <Button text="Primeiro"/>
      <Button text="Segundo"/>
      <Button />
    </div>
  )
}

export default App
