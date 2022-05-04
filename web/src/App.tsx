interface ButtonProps {
  // text: string;
  text?: string;
}

function Button(props: ButtonProps) {
  // return <button>{props.text}</button>
  return <button>{props.text ?? 'Texto Inicial'}</button>
}


function App() {
  return (
    <div>
      <Button text="Primeiro"/>
      <Button text="Segundo"/>
      <Button />
    </div>
  )
}

export default App
