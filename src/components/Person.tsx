import { useQuery } from '@apollo/client/react/hooks'
import { useParams } from 'react-router-dom'
import clsx from 'clsx'
import {
  person as PersonQuery,
  personVariables as PersonQueryVariables,
} from '../graphql/__generated__/person'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { loader as queryLoader } from 'graphql.macro'
import { red } from '@material-ui/core/colors'
import {
  AppBar,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import React from 'react'

const query = queryLoader('../graphql/onePerson.graphql')
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

  const { data, loading, refetch } = useQuery<
    PersonQuery,
    PersonQueryVariables
  >(query, {
    variables: { input: id || '1' },
  })

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
          title='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {data?.person.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}
