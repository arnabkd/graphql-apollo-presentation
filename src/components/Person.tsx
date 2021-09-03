import {
  AppBar,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import RefreshIcon from '@material-ui/icons/Refresh'
import { useParams } from 'react-router-dom'
import { usePersonQueryQuery } from '../graphql/generated/onePerson.generated'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export const Person = () => {
  const { id } = useParams<{ id: string | undefined }>()

  const classes = useStyles()

  const { data, loading, refetch } = usePersonQueryQuery({
    variables: { input: id || '1' },
  })

  const person = data?.person

  return (
    <>
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6' color='inherit' noWrap>
            {loading && 'Loading..'}
            {data && data.person.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              {data?.person.name.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={data?.person.name}
          subheader={`born ${data?.person.dateOfBirth}, ${data?.person.friends.length} friends, ${data?.person.pets.length} pets`}
        />
        <CardMedia
          className={classes.media}
          image='http://placeimg.com/640/480/people'
          title={data?.person.name}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {data?.person.description}
            <p>
              {`${person?.name} has ${person?.friends.length} friends`}
              <List>
                {person?.friends.map((friend) => (
                  <ListItem
                    divider
                    key={friend.id}
                  >{` ${friend.name}`}</ListItem>
                ))}
              </List>
            </p>
            <p>
              {`${person?.name} has ${person?.pets.length} pets`}
              <List>
                {person?.pets.map((pet) => (
                  <ListItem divider key={pet.id}>
                    {pet.__typename === 'Dog' && '🐶'}
                    {pet.__typename === 'Cat' && '🐱'}
                    {` ${pet.name}`}
                  </ListItem>
                ))}
              </List>
            </p>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton
            aria-label='refetch'
            onClick={async () => await refetch()}
          >
            <RefreshIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}
