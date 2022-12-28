import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
    providedIn: 'root'
})
export class LoginQL extends Mutation {
    document = gql`
    mutation($username:ID!,$password:String!) {
        logIn(username:$username, password:$password){
          customer{
            name
          }
          token
        }
      }
`;
}
