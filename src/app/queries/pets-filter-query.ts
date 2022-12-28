import gql from 'graphql-tag';

const petFieldsQuery = gql`
  fragment petFields on Pet {
    id
    name
    category
    status
    inCareOf{
      name
    }
  }`;

export const filterPetsQuery = gql`
query petsQuery($status : PetStatus)
{
  allPets(status : $status)  {
      ...petFields
  }
} ${petFieldsQuery}`;

