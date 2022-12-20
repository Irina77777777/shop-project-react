import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
  return <h1>Hello React</h1>
}

const Content = () => {
  return (
      <React.Fragment>
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
      </React.Fragment>
  )
}

const App = () => {
    return (
      <> <Title /> <Content /> </>) 
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>
 <App />
</React.StrictMode>)
