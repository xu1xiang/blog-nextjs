import { Box, Grid } from '@mui/material'
import { PostCard } from './PostCard'

export const PostList = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Grid container spacing={[2, 3, 3, 4]}>
        {new Array(10).fill(1).map((_, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <PostCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
