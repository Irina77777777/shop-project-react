import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'

type TitleProps = {
    title?: string | number
}

const Title = (props: TitleProps) => {
    console.log(props)
    return <h1>Hello {props.title}</h1>
}


const Content = () => {
  return (
      <React.Fragment>
      </React.Fragment>
  )
}

const App = () => {
    return (
        <>
            <Title title="React" />
            <Title title="TS" />
            <Title title={10} />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>
 <App />
</React.StrictMode>)
