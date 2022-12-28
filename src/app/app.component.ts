import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';

const CurrentUserForProfile = gql`
query myQuery($status : PetStatus)
{
  allPets(status : $status)  {
    name
    category
    status
    }
}`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-graphql-apollo';


  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.apollo.mutate({
      mutation: gql`
        mutation($username:ID!,$password:String!) {
          logIn(username:$username, password:$password){
            customer{
              name
            }
            token
          }
        }
      `,
      variables: {
        username: 'rvijay',
        password: 'pass'
      }
    }

    ).subscribe(c =>
      console.log(c),
      err => console.log(err)
    );

    // this.apollo.mutate({
    //   mutation: gql`
    //     mutation {
    //       logIn(username:"rvijay", password:"pass"){
    //         customer{
    //           name
    //         }
    //         token
    //       }
    //     }
    //   `
    // }).subscribe(c =>
    //   console.log(c),
    //   err => console.log(err)
    // );

    // this.apollo.mutate({
    //   mutation: gql`
    //     mutation createAccount {
    //       createAccount(input:{name:"rajesh", username:"rvijay125", password:"passer"}){
    //         username
    //       }
    //     }
    //   `
    // }).subscribe(c =>
    //   console.log(c),
    //   err => console.log(err)
    // );

    this.apollo
      .watchQuery({
        query: CurrentUserForProfile,
        variables: {
          status: 'AVAILABLE',
        },
      })
      .valueChanges.subscribe(result => {
        console.log(result);
      });


    // this.apollo
    //   .watchQuery({
    //     query: gql`
    //     {
    //       allPets {
    //         name
    //         category
    //         }
    //     }
    //     `,
    //   })
    //   .valueChanges.subscribe(result => {
    //     console.log(result);
    //   });
  }

}
