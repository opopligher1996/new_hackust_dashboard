import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_MOVIES = gql`
  query {
    dog(breed:"affenpinscher") {
      id
   		breed
      displayImage
  }
}
`

const ApolloTest = () => (
  <Query query={GET_MOVIES}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return (
        <div>{data.dog.breed}</div>
      )
    }}
  </Query>
)

export default ApolloTest;
