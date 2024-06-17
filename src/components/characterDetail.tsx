import { useQuery, useMutation } from '@apollo/client';
import { GET_CHARACTERDETAIL } from "../graphql/getcharacter"
import { ADD_COMMENT } from '../graphql/updatecharacter';



const [addComment] = useMutation(ADD_COMMENT, )

export function CharacterDetail(){
    addComment({
        variables{
            id: 1,
            Comment: "0"
        }
    });
    return (
        
    )
}