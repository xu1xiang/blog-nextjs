import { Container } from '@mui/system'
import { NextPage } from 'next'
import { PostList } from '../components/Post'

const Home: NextPage = () => {
  return (
    <Container maxWidth="xl">
      <PostList />
    </Container>
  )
}

export default Home
