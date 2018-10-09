import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../shared/employee.service";
import { Department } from '../../interfaces/department';

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  constructor(private service: EmployeeService) {}

  ngOnInit() {}

  departments: Department[] = [
    { value: "00", viewValue: "Amazonas" },
    { value: "01", viewValue: "Antioquia" },
    { value: "02", viewValue: "Arauca" },
    { value: "03", viewValue: "Atlántico" },
    { value: "04", viewValue: "Bolívar" },
    { value: "05", viewValue: "Boyacá" },
    { value: "06", viewValue: "Caldas" },
    { value: "07", viewValue: "Caquetá" },
    { value: "08", viewValue: "Casanare" },
    { value: "09", viewValue: "Cauca" },
    { value: "10", viewValue: "Cesar" },
    { value: "11", viewValue: "Chocó" },
    { value: "12", viewValue: "Córdoba" },
    { value: "13", viewValue: "Cundinamarca" },
    { value: "14", viewValue: "Guainía" },
    { value: "15", viewValue: "Guaviare" },
    { value: "16", viewValue: "Huila" },
    { value: "17", viewValue: "La Guajira" },
    { value: "18", viewValue: "Magdalena" },
    { value: "19", viewValue: "Meta" },
    { value: "20", viewValue: "Nariño" },
    { value: "21", viewValue: "Norte de Santander" },
    { value: "22", viewValue: "Putumayo" },
    { value: "23", viewValue: "Quindío" },
    { value: "20", viewValue: "Risaralda" },
    { value: "21", viewValue: "San Andrés y Providencia" },
    { value: "22", viewValue: "Santander" },
    { value: "23", viewValue: "Sucre" },    
    { value: "20", viewValue: "Tolima" },
    { value: "21", viewValue: "Valle del Cauca" },
    { value: "22", viewValue: "Vaupés" },
    { value: "23", viewValue: "Vichada" }       
  ];

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
