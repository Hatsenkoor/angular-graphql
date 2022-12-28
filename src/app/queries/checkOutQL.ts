import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
    providedIn: 'root'
})
export class CheckOutQL extends Mutation {
    document = gql`
    mutation Checkout($petId:ID!) {
        checkOut(id:$petId){
            pet {
                id
                name
                status
            }
            customer {
                name
            }
        }
      }
`;
}
