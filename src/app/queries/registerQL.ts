import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
    providedIn: 'root'
})
export class RegisterQL extends Mutation {
    document = gql`
      mutation ($name:String!,$username:ID!,$password:String!) {
            createAccount(input: { name:$name,username:$username,password:$password } ) {
              username
            }
          }
`;
}


