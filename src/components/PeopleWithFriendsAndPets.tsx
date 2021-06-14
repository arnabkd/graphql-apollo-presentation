import { AppBar, Avatar, CardContent, Grid, List, Toolbar, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import ListItem from '@material-ui/core/ListItem'
import { loader as queryLoader } from 'graphql.macro'
import { useQuery } from '@apollo/client'
import { allPeople as AllPeopleQuery } from '../graphql/__generated__/allPeople'
import React from 'react'
import { Link } from 'react-router-dom'

const query = queryLoader('../graphql/allPeople.graphql')

export const PeopleWithFriendsAndPets = () => {
  const { data, loading } = useQuery<AllPeopleQuery>(query, {
    notifyOnNetworkStatusChange: true,
    pollInterval: 5000,
  })

  return (
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
        {data?.allPeople.map((person) => (
          <Grid item xs={3} key={person.id}>
            <Card>
              <CardHeader
                avatar={<Avatar>{person.name.charAt(0)}</Avatar>}
                title={person.name}
              ></CardHeader>
              <CardContent>     
                <Link
                  to={`person/${person.id}`}
                  onClick={() => console.log('click')}
                  color='inherit'
                >
                  Show more
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
