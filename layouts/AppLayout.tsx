import { Container } from '@mui/material'
import TopBar from '../components/TopBar'

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <TopBar />
      <Container maxWidth="xl" sx={{ pt: 4 }}>
        {children}
      </Container>
    </>
  )
}

export default AppLayout
