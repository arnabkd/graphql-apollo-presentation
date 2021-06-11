import {
  AppBar,
  Avatar,
  Button,
  CardContent,
  Grid,
  List,
  Toolbar,
  Typography,
} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import ListItem from '@material-ui/core/ListItem'
import { loader as queryLoader } from 'graphql.macro'
import { useQuery } from '@apollo/client'
import { allPeople as AllPeopleQuery } from './graphql/__generated__/allPeople'

const query = queryLoader('./graphql/allPeople.graphql')

export const LandingPage = () => {
  const { data, loading, refetch } = useQuery<AllPeopleQuery>(query, {
    notifyOnNetworkStatusChange: true,
    pollInterval: 5000,
  })

  return (
    <div>
      <AppBar position='sticky'>
        <Toolbar>
          <Button color='inherit' onClick={async() => await refetch()}>Refresh</Button>
        </Toolbar>
      </AppBar>
      {loading && 'Loading ...'}
      <Grid container spacing={2}>
        {data?.allPeople.map((person) => (
          <Grid
            item
            xs={3}
            key={person.id}
            alignItems='stretch'
            justify='center'
            direction='row'
          >
            <Card>
              <CardHeader
                avatar={<Avatar>{person.name.charAt(0)}</Avatar>}
                title={person.name}
              ></CardHeader>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Friends
                </Typography>
                <List dense={true}>
                  {person.friends.map((friend) => (
                    <ListItem>{friend.name}</ListItem>
                  ))}
                </List>

                <Typography gutterBottom variant='h5' component='h2'>
                  Pets
                </Typography>
                <List dense={true}>
                  {person.pets.map((pet) => (
                    <ListItem>
                      {pet.__typename === 'Dog' && '🐶 '}
                      {pet.__typename === 'Cat' && '🐱 '}
                      {pet.name}
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
