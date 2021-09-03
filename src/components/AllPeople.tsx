import {
  AppBar,
  Avatar,
  CardContent,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import { Link } from 'react-router-dom'
import { useAllPeopleQuery } from '../graphql/generated/allPeople.generated'
import { awaitRefetch } from '../helper'
import { Footer } from './Footer'

export const AllPeople = () => {
  const { data, loading, refetch } = useAllPeopleQuery(
    {
      notifyOnNetworkStatusChange: false,
    },
  )

  return (
    <>
      <div>
        <AppBar position='relative'>
          <Toolbar>
            <Typography variant='h6' color='inherit' noWrap>
              {loading && 'Loading..'}
              {data && 'All people'}
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid
          container
          spacing={2}
          alignItems='stretch'
          justify='center'
          direction='row'
        >
          {data?.allPeople.map((person) => {
            const [first, last] = person.name.split(' ')
            return (
              <Grid item xs={3} key={person.id}>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar>{`${first.charAt(0)}${last.charAt(0)}`}</Avatar>
                    }
                    title={person.name}
                  ></CardHeader>
                  <CardContent>
                    <Link
                      to={`person/${person.id}`}
                      color='inherit'
                    >
                      Show more
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </div>
      <hr />
      <Footer onComplete={awaitRefetch(refetch)} />
    </>
  )
}
