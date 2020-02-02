import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent implements OnInit {
  public today=new Date();
  public currentMonth=this.today.getMonth();
  public currentYear=this.today.getFullYear();
  constructor() { }

  ngOnInit() {
    this.showCalender(this.currentMonth, this.currentYear);
  }

  public showCalender(month,year){
  let firstDay=(new Date(year,month)).getDay();
  let tbl = document.getElementById("calendar-body");
  tbl.innerHTML = "";
  let date=1;
  for(let i=0;i<6;i++){
    //creating row
    let row=document.createElement("tr");
    //creating column
    for(let j=0;j<7;j++){
      if(i===0&&j<firstDay){
        let cell=document.createElement("td");
        let cellText=document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      else if(date>this.daysInMonth(year,month)){
         break;
      }
      else{
        let cell=document.createElement("td");
        let cellText = document.createTextNode(String(date));
        if (date === this.today.getDate() && year === this.today.getFullYear() && month === this.today.getMonth()) {
          cell.classList.add("bg-primary");
      }
        cell.appendChild(cellText);
        row.appendChild(cell);
        date++;
      }
    }
    tbl.appendChild(row);
  }
  }
  public daysInMonth(year,month) {
    return 32 - new Date(year, month, 32).getDate();
}
// public daysAndDaysName=(year,month)=>{
//     this.numberOfDaysInMonth= new Date(year, month, 0).getDate();;
//     console.log("days in month "+this.numberOfDaysInMonth)
//     let FirstDayNumber = new Date(year,month);
//     let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     this.firstDayOfMonth=weekday[FirstDayNumber.getDay()]
//     console.log("This is first day of month "+this.firstDayOfMonth);
//     if(this.firstDayOfMonth=="Wednesday"){
//       this.columns[0]=28;
//       this.columns[1]=29;
//       this.columns[2]=30;
//       this.columns[3]=31;
//       for(let i=1;i<=this.numberOfDaysInMonth;i++){
//        this.columns.push(i);
//       }
//       console.log("columns "+this.columns);
//     }
//   }
  
}
