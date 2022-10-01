import { Component, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule,FormBuilder} from '@angular/forms';
import { CompanyModule } from '../company/company.module';
import { AddCompanyService } from '../shared/add-company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  companys;
  constructor(private userservice:AddCompanyService) {
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
