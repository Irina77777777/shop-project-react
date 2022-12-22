import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'

type TitleProps = {
    title?: string | number
}

type ContentProps = {
    p1: string
    p2: string
}

const Title = (props: TitleProps) => {
    console.log(props)
    return <h1>Hello {props.title}</h1>
}


const Content = (props: ContentProps) => {
  return (
      <React.Fragment>
          <p>{props.p1}</p>
          <p>{props.p2}</p>
      </React.Fragment>
  )
}

const App = () => {
    return (
        <>
            <Title title="React" />
            <Title title="TS" />
            <Title title={10} />
            <Content  p1="Hello React1" p2="Hello TS 222"/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>
 <App />
</React.StrictMode>)
