import Button from "./components/ui/Button.jsx";
import Sidebar from "./components/layout/Sidebar";

function App() {

  return (
    <>
      <div className="flex">
        <Sidebar/>
        <div className="p-4 flex flex-col gap-4">
          <h1 className="text-xl font-bold">Oi</h1>

          {/* Botões visíveis */}
          <Button variant="secondary" text="Voltar" />
          <Button text="Avançar" />
        </div>
      </div>
    </>
  )
}

export default App;