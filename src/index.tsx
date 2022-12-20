import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
  return <h1>Hello React</h1>
}

const Content = () => {
  return (
      <div>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              odit quas quibusdam quod eum iste totam inventore laborum, nostrum
              autem ratione. Maxime est numquam illum in corporis ratione hic
              nesciunt.
          </p>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              odit quas quibusdam quod eum iste totam inventore laborum, nostrum
              autem ratione. Maxime est numquam illum in corporis ratione hic
              nesciunt.
          </p>
      </div>
  )
}

const App = () => {
    return (
      <div> <Title /> <Content /> </div>) 
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>
 <App />
</React.StrictMode>)
