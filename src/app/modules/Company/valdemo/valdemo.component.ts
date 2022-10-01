import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddCompanyService } from '../shared/add-company.service';

@Component({
  selector: 'app-valdemo',
  templateUrl: './valdemo.component.html',
  styleUrls: ['./valdemo.component.scss']
})
export class ValdemoComponent implements OnInit {
  aplhabetRegex = /^[a-zA-Z]+$/;
  numericRegex=/^[0-9]+$/;
  contactpattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  gst=/^[a-zA-Z0-9]+$/;

 form =new FormGroup({

firstName :new FormControl('',[Validators.required,Validators.pattern(this.aplhabetRegex)]),
middleName :new FormControl('',[Validators.required,Validators.pattern(this.aplhabetRegex)]),
lastName :new FormControl('',[Validators.required,Validators.pattern(this.aplhabetRegex)]),
ShopId :new FormControl('',[Validators.required,Validators.pattern(this.numericRegex),Validators.minLength(4)]),
Gstnumber :new FormControl('',[Validators.required,Validators.pattern(this.gst)]),
companyName :new FormControl('',[Validators.required,Validators.pattern(this.aplhabetRegex)]),
Email :new FormControl('',[Validators.required,Validators.email]),
contact1 :new FormControl('',[Validators.required,Validators.pattern(this.contactpattern)]),
contact2 :new FormControl('',[Validators.required,Validators.pattern(this.contactpattern)]),
Ocontact1 :new FormControl('',[Validators.required,Validators.pattern(this.contactpattern)]),
Ocontact2 :new FormControl('',[Validators.required,Validators.pattern(this.contactpattern)]),
City :new FormControl('',[Validators.required,Validators.pattern(this.aplhabetRegex)]),
State :new FormControl('',[Validators.required,Validators.pattern(this.aplhabetRegex)]),
Zip :new FormControl('',[Validators.required,Validators.pattern(this.numericRegex)]),

 })

 companys;
  constructor(private userservice:AddCompanyService) { 
    this.companys= {"fistName":"asha","lastName":"shinde","middleName":"anand",
     "shopActRegNumber":"5676",
    "gstn":"4567",
     "companyName": "tcs",
      "email": "ashashinde@gmail.com",
      "primaryContactNumber": "9878675645",
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
