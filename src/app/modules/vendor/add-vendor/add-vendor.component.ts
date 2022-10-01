import { Component, OnInit } from '@angular/core';
import { CreatedriverService } from 'src/app/createdriver.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {

 

  companys;
  constructor(private userservice:CreatedriverService) {
    this.companys= {"fistName":"asha","lastName":"shinde","middleName":"anand",
     "shopActRegNumber":"5676",
    "gstn":"4567",
     "comapnyName": "tcs",
      "email": "ashashinde@gmail.com",
      "pimaryContactNumber": "9878675645",
      "secondaryContactNumber":"4567896544",
       "officePrimaryContactNumber": "89655544387",
        "officeSecContactNumber":"89675543477"};
  }
  ngOnInit(): void {
  }


  createUser(): void {
    this.userservice.createUser(this.companys)
        .subscribe( data => {
          alert("User created successfully.");
        });
      };
    }