import { ArrowForward } from '@mui/icons-material'
import { CardActionArea, createTheme } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export const PostCard = () => {
  const theme = createTheme()

  return (
    <>
      <Card variant="outlined">
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image="https://www.bing.com/th?id=OHR.BannerPeak_ZH-CN2693006060_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="truncate-2"
              sx={{
                height: (theme.typography.h5.lineHeight as number) * 2 + 'em',
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum
              autem cum amet, numquam minima commodi eligendi est doloribus
              voluptates recusandae assumenda modi neque, ullam minus nesciunt
              veritatis provident corporis!
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="truncate-3"
              sx={{
                height:
                  (theme.typography.body2.lineHeight as number) * 3 + 'em',
              }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Typography
              variant="button"
              sx={{
                ml: 1,
                display: 'flex',
                alignItems: 'center',
                color: 'primary.main',
              }}
            >
              READ MORE <ArrowForward sx={{ ml: 0.5 }} />
            </Typography>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  )
}
