import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { filterPetsQuery } from '../queries/pets-filter-query';
import { CheckInQL } from '../queries/checkInQL';
import { CheckOutQL } from '../queries/checkOutQL';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private apollo: Apollo, private checkInQL: CheckInQL, private checkOutQL: CheckOutQL) { }


  getPetsByStatus(petStatus: string) {
    return this.apollo
      .watchQuery({
        query: filterPetsQuery,
        fetchPolicy: 'network-only',
        variables: {
          status: petStatus,
        },
      })
      .valueChanges;
  }


  checkIn(pId: string) {
    this.checkInQL.mutate({
      petId: pId
    },
      { refetchQueries: [`petsQuery`] }
    ).subscribe();

  }

  checkOut(pId: string) {
    this.checkOutQL.mutate({
      petId: pId
    },
      { refetchQueries: [`petsQuery`] }
    ).subscribe();
  }

}

