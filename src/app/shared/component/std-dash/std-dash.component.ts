import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../module/std';
import { students } from '../../const/std';

@Component({
  selector: 'app-std-dash',
  templateUrl: './std-dash.component.html',
  styleUrls: ['./std-dash.component.scss']
})
export class StdDashComponent implements OnInit {
  stdArr:Istudent[] =students
  editObj!:Istudent
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(std:Istudent){
    this.stdArr.unshift(std)
  }

  onEdit(std:Istudent){
    this.editObj = std

  }

  getindex(id:number){
    return this.stdArr.findIndex(ele => ele.id === id)
  }

  onUpdate(std:Istudent){
    let index:number = this.getindex(std.id)
    this.stdArr[index] = std
  }

  onRemove(id:number){
    let getconfirm = confirm(`Are You Sure You Want To Remove Student With Ied ${id}?`)
    if(getconfirm){
      let index:number = this.getindex(id)
      this.stdArr.splice(index,1)

    }
  }

}
