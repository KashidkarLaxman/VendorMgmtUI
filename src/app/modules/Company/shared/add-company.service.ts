import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyModule } from '../company/company.module';

@Injectable({
  providedIn: 'root'
})
export class AddCompanyService {
baseurl="http://127.0.0.1:8081/employee";
httphader=new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

getComapnyList():Observable<any>
{
return this.http.get(this.baseurl,{headers:this.httphader});
}
getoneComapny(id):Observable<any>
{
return this.http.get(this.baseurl+ "/"+ id+"/",{headers:this.httphader});
}
public deletecompany(company) {
  alert("User deleted successfully."+company.id);
  return this.http.delete(this.baseurl + "/"+ company.id,{headers:this.httphader});
}
public updatecompany(company) {
  return this.http.put(this.baseurl + "/"+ company.id,{headers:this.httphader});
}

public createUser(company) {
  return this.http.post(this.baseurl, company);
}
}
