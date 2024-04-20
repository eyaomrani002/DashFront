import { AfterViewInit, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import * as Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d';
Highcharts3D(Highcharts);
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-synthese-personnel',
  templateUrl: './synthese-personnel.component.html',
  styleUrls: ['./synthese-personnel.component.css']
})
export class SynthesePersonnelComponent implements OnInit,AfterViewInit {
  dropdownListAnnee: any[] = [];
  dropdownListMois: any[] = [];
  dropdownListTrancheAge: any[] = [];
  dropdownListSexe: any[] = [];
  dropdownListCategorie: any[] = [];
  dropdownListTypeContrat: any[] = [];
  selectedItemsAnnee: any[] = [];
  selectedItemsMois: any[] = [];
  selectedItemsTrancheAge: any[] = [];
  selectedItemsSexe: any[] = [];
  selectedItemsCategorie: any[] = [];
  selectedItemsTypeContrat: any[] = [];
  dropdownSettings: any = {};

  rubriqpaieForm: FormGroup;
  employees: any[] = [];
  selectedEmployee: any;
  showTable: boolean = false; 
  chart: any;
  constructor(private formBuilder: FormBuilder) {
    this.rubriqpaieForm = this.formBuilder.group({
      annee: [''], 
      mois: [''],
      categorie: [''],
      trancheDage: [''],
      sexe: [''],
      typeContrat: ['']
    });
  }
  ngAfterViewInit(): void {
  }


  ngOnInit(): void {
    this.loadAnneeDropdown();
    this.loadMoisDropdown();
    this.loadTrancheAgeDropdown();
    this.loadSexeDropdown();
    this.loadCategorieDropdown(); // Corrected method call
    this.loadTypeContartDropdown(); // Corrected method call
    this.initializeDropdownSettings();

    
    this.createBarChart();
    this.createBarChart2();
    this.createModernPieChart();

  }
  createBarChart(): void {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Sales',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 99, 132, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  createModernPieChart(): void {
    const ctx = document.getElementById('modernPieChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              font: {
                size: 16
              }
            }
          },
          title: {
            display: true,
            text: 'Modern Pie Chart',
            font: {
              size: 24
            }
          },
          tooltip: {
            bodyFont: {
              size: 18
            }
          }
        },
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 0,
            bottom: 0
          }
        }
      }
    });
  }
  createBarChart2(): void {
    const ctx = document.getElementById('barChart2') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Service A', 'Service B', 'Service C', 'Service D', 'Service E'],
        datasets: [{
          label: 'Nombre de personnel',
          data: [50, 30, 40, 25, 35], // Remplacez ces valeurs par le nombre de personnel pour chaque service
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        animation: {
          duration: 2000,
          easing: 'easeInOutQuart'
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
}
doseach() {
  const formValues = this.rubriqpaieForm.value;
  console.log('Search criteria:', formValues);
  this.showTable = true; }


  initializeEmployees() {
    this.employees = [
      {
        matricule: '001',
        prenomNom: ' aya omrani',
        sexe: 'F',
        dateNaissance: '31-05-2002',
        dateRecrutement: '2020-01-01',
        dateDepart: '2023-01-01',
        carriere: 'Développeur',
        qualification: 'Bac+5',
        fonction: 'Ingénieur',
        service: 'Informatique',
        salaire: 50000
      },
      {
        matricule: '002',
        prenomNom: 'fairouz raouin',
        sexe: 'F',
        dateNaissance: '12-02-2002',
        dateRecrutement: '2020-02-02',
        dateDepart: '2023-01-01',
        carriere: 'Développeur',
        qualification: 'Bac+5',
        fonction: 'Ingénieur',
        service: 'Informatique',
        salaire: 50000
      },
    ];
  }

viderFilter() {
this.rubriqpaieForm.patchValue({
annee: '',
mois: '',
categorie: '',
trancheDage: '',
sexe: '',
typeContrat: ''
});
}
getFormData() {
  const formData = this.rubriqpaieForm.value;
  console.log('Form data:', formData);
}

calculateAge(dateOfBirth: string): number {
  const today = new Date();
  const [day, month, year] = dateOfBirth.split('-').map(Number);
  const birthDate = new Date(year, month - 1, day); // Mois - 1 car JavaScript indexe les mois à partir de 0
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
showCareerDetails(employee: any) {
  // Si l'employé actuellement sélectionné est le même que celui sur lequel vous avez cliqué, cachez la popup
  if (this.selectedEmployee === employee) {
    this.selectedEmployee = null;
  } else {
    this.selectedEmployee = employee;
  }
}

hideCareerDetails() {
  this.selectedEmployee = null;
}
calculateTotalCareer(employee: any): string {
  if (employee && employee.dateDepart && employee.dateRecrutement) {
    const dateDepart = new Date(employee.dateDepart);
    const dateRecrutement = new Date(employee.dateRecrutement);

    const diffTime = Math.abs(dateDepart.getTime() - dateRecrutement.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = diffDays % 30;

    let durationString = '';
    if (years > 0) {
      durationString += years + ' ans ';
    }
    if (months > 0) {
      durationString += months + ' mois ';
    }
    if (days > 0) {
      durationString += days + ' jours';
    }

    return durationString.trim();
  } else {
    return 'Durée de travail inconnue';
  }
}





  loadMoisDropdown() {
    this.dropdownListMois = [
    { "id": 1, "itemName": "Janvier" },
    { "id": 2, "itemName": "Fevrier" },
    { "id": 3, "itemName": "mars" },
    { "id": 4, "itemName": "avril" },
    { "id": 5, "itemName": "mai" },
    { "id": 6, "itemName": "juin" },
    { "id": 7, "itemName": "juillet" },
    { "id": 8, "itemName": "août" },
    { "id": 9, "itemName": "septembre" },
    { "id": 10, "itemName": "octobre" },
    { "id": 11, "itemName": "novembre" },
    { "id": 12, "itemName": "décembre" },];
    this.selectedItemsMois = [];
  }
  loadTrancheAgeDropdown() {
    this.dropdownListTrancheAge = [
      { "id": 1, "itemName": "20--30" },
      { "id": 2, "itemName": "31--40" },
      { "id": 3, "itemName": "41--50" },
      { "id": 4, "itemName": "51--60" },
      { "id": 5, "itemName": "61--+" },
    ];
      this.selectedItemsTrancheAge = [];
  }
  loadSexeDropdown() {
    this.dropdownListSexe = [
      { "id": 1, "itemName": "Feminin" },
      { "id": 2, "itemName": "Masculin" }
    ]; this.selectedItemsSexe = [];
  }

  loadAnneeDropdown(): void {
    // Charger les options de la liste déroulante Année
    this.dropdownListAnnee = [
      { "id": 1, "itemName": "2024" },
      { "id": 2, "itemName": "2023" }
    ];
    this.selectedItemsAnnee = [];
  
  }
  loadTypeContartDropdown(): void {
    // Charger les options de la liste déroulante Année
    this.dropdownListTypeContrat= [
      { "id": 1, "itemName": "CDD" },
      { "id": 2, "itemName": "CVP" }
    ];
    this.selectedItemsTypeContrat = [];
  
  }
  loadCategorieDropdown(): void {
    // Charger les options de la liste déroulante Catégorie
    this.dropdownListCategorie = [
      { "id": 1, "itemName": "Catégorie 1" },
      { "id": 2, "itemName": "Catégorie 2" }
    ];
    // Initialiser les options sélectionnées pour la liste déroulante Catégorie
    this.selectedItemsCategorie = [];
  }
  
  

  // Répétez le même processus pour les autres méthodes de chargement de liste déroulante

  initializeDropdownSettings(): void {
    // Initialiser les paramètres de la liste déroulante
    this.dropdownSettings = {
      singleSCelection: false,
      text: "Choisir option(s)",
      selectAllText: 'Tout',
      unSelectAllText: 'Annuler',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }
//Annee
  onItemSelectAnnee(item: any): void {
    console.log(item["itemName"]);
    console.log(this.selectedItemsAnnee);
  }

  onItemDeSelectAnnee(item: any): void {
    console.log(item);
    console.log(this.selectedItemsAnnee);
  }

  onSelectAllAnnee(items: any): void {
    console.log(items);
  }

  onDeSelectAllAnnee(items: any): void {
    console.log(items);
  }

  
  //Mois
  onItemSelectMois(item: any): void {
    console.log(item["itemName"]);
    console.log(this.selectedItemsAnnee);
  }

  onItemDeSelectMois(item: any): void {
    console.log(item);
    console.log(this.selectedItemsAnnee);
  }

  onSelectAllMois(items: any): void {
    console.log(items);
  }

  onDeSelectAllMois(items: any): void {
    console.log(items);
  }

  //Type Contrat
  
  onItemSelectTypeContrat(item: any): void {
    console.log(item["itemName"]);
    console.log(this.selectedItemsAnnee);
  }

  onItemDeSelectTypeContrat(item: any): void {
    console.log(item);
    console.log(this.selectedItemsAnnee);
  }

  onSelectAllTypeContrat(items: any): void {
    console.log(items);
  }

  onDeSelectAllTypeContrat(items: any): void {
    console.log(items);
  }
//Sexe

onItemSelectSexe(item: any): void {
  console.log(item["itemName"]);
  console.log(this.selectedItemsAnnee);
}

onItemDeSelectSexe(item: any): void {
  console.log(item);
  console.log(this.selectedItemsAnnee);
}

onSelectAllSexe(items: any): void {
  console.log(items);
}

onDeSelectAllSexe(items: any): void {
  console.log(items);
}
//Tranchedage

onItemSelectTrancheAge(item: any): void {
  console.log(item["itemName"]);
  console.log(this.selectedItemsAnnee);
}

onItemDeSelectTrancheAge(item: any): void {
  console.log(item);
  console.log(this.selectedItemsAnnee);
}

onSelectAllTrancheAge(items: any): void {
  console.log(items);
}

onDeSelectAllTrancheAge(items: any): void {
  console.log(items);
}
//Categorie

onItemSelectCategorie(item: any): void {
  console.log(item["itemName"]);
  console.log(this.selectedItemsAnnee);
}

onItemDeSelectCategorie(item: any): void {
  console.log(item);
  console.log(this.selectedItemsAnnee);
}

onSelectAllCategorie(items: any): void {
  console.log(items);
}

onDeSelectAllCategorie(items: any): void {
  console.log(items);
}

}
