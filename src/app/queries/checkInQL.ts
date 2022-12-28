import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
    providedIn: 'root'
})
export class CheckInQL extends Mutation {
    document = gql`
    mutation CheckIn($petId:ID!) {
        checkIn(id:$petId){
            pet {
                id
                name
                status
            }
            checkOutDate
            checkInDate
            late
        }
      }
`;
}
