import { Component, OnInit } from '@angular/core';
import { DriverModule } from '../driver/driver.module';
import { CreatedriverService } from '../createdriver.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

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
    this.companys.fistName='';
  }


  
  createUser(): void {
    this.userservice.createUser(this.companys)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}
