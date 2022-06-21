import { Card, Grid } from '@mui/material'
import Image from 'next/image'

const PostDetail = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={8}>
        <Card sx={{ borderRadius: 2 }} variant="outlined">
          <div style={{ position: 'relative', paddingTop: 2100 / 50 + '%' }}>
            <Image
              layout="fill"
              src="https://www.bing.com/th?id=OHR.BannerPeak_ZH-CN2693006060_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
              alt="thumbnail"
            />
          </div>
          <h1>hello</h1>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>hello world</Card>
      </Grid>
    </Grid>
  )
}

export default PostDetail
