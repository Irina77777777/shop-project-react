import { Container } from "@mui/material"
import Home from "pages/Home/Home"

type Props = {}
const Main = (props: Props) => {
  return (
      <Container maxWidth="lg">
          <Home />
      </Container>
  )
}
export default Main