import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  petStatus = [{ id: null, name: 'All' }, { id: 'AVAILABLE', name: 'Available' }, { id: 'CHECKEDOUT', name: 'Checked Out' }];
  selectedPetStatusId: string;
  pets$: any;
  constructor(private petService: PetService, private accountService: AccountService, private router: Router) { }


  ngOnInit() {
    this.selectedPetStatusId = null;
    this.loadPets();
  }



  getStatusName(): string {
    return this.petStatus.find(c => c.id === this.selectedPetStatusId).name;
  }

  changePetStatus(status) {
    this.selectedPetStatusId = status.id;
    this.loadPets();
  }

  loadPets() {
    this.pets$ = this.petService.getPetsByStatus(this.selectedPetStatusId);
  }

  checkInOut(pet: any) {
    if (pet.status === 'AVAILABLE') {
      this.petService.checkOut(pet.id);
    } else {
      this.petService.checkIn(pet.id);
    }
  }

  get loggedIn() {
    return this.accountService.isLoggedIn();
  }

  logOut() {
    this.accountService.logOut();
    this.router.navigateByUrl('login');
  }

}
