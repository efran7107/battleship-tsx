import '../styles/App.css'

function App() {

  return (
    <>
     <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log(e.currentTarget.id);
        
      }}
     action="" id="form-one">
      <input type="submit" value="submit" />
     </form>
     <form 
     onSubmit={(e) => {
      e.preventDefault()
      console.log(e.currentTarget.id);
    }}
     action="" id="form-two">
     <input type="submit" value="submit" />
     </form>
    </>
  )
}

export default App
