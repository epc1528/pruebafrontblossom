import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
query mutation($id: ID, $comment:String) {
    updateCharacter(id: $id, comment: $comment) {
    id
    comment
  }
}
`;