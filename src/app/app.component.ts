import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listData: any=[];
  selectedData: any;
  id: any;
  constructor(private list:ListService){}
  getListData(){
    this.list.getListData().subscribe(res=>{
      this.listData=res['hits'];
    })
  }
  getSelectedRow(item:any){
    this.selectedData=item;
  }
  ngOnInit() {
    this.getListData();
    this.id = setInterval(() => {
      this.getListData();
    }, 10000);
  }
  
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}
