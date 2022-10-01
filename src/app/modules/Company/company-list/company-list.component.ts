import { Component, OnInit } from '@angular/core';
import { AddCompanyService } from '../shared/add-company.service';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  providers :[AddCompanyService]
})
export class CompanyListComponent implements OnInit {
  
  companys=[{test:"test"}];
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  
  constructor(private service:AddCompanyService) { 
    
  this.getCompany();
  }
  
getCompany()
{
this.service.getComapnyList().subscribe(data =>{this.companys=data;
  console.log(data);},
  error=>{console.log(error)});
  

}



delete(company): void {
  this.service.deletecompany(company)
      .subscribe( data => { this.getCompany();
    
      });

};

update(company):void{

  
}


}
