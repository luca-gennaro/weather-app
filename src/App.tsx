import Forecast from "./components/Forecast"
import Search from "./components/Search"
import useForecast from "./hooks/useForecast"

const App = (): JSX.Element => {

  const {term,
    options,
    forecast,
    onInputChange,
    onSubmit,
    onOptionSelect} = useForecast()

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 w-full h-[100vh]">
      {forecast ? (
        <Forecast data={forecast}/>
      ) : (
          <Search 
       term = { term }
       options = { options }
       onInputChange = { onInputChange }
       onOptionSelect = { onOptionSelect }
       onSubmit = { onSubmit }
      />
      )}

    </main>
  )
}

export default App
