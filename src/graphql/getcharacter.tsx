import { gql } from '@apollo/client';

export const GET_CHARACTER = gql`
query query($page:ID) {
  character(page:$page) {
    count
    character{
      id
      name
      image
      species
    }
  }
}
`;

export const GET_CHARACTERDETAIL = gql`
query query($page:ID) {
  characters(page:$page) {
      id
      name
      status
      species
      type
      gender
      image
      comment
      createdAt
      updatedAt
      deleteAt
  }
}
`;