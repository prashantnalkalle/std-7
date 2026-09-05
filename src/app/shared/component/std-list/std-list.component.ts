import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istudent } from '../../module/std';

@Component({
  selector: 'app-std-list',
  templateUrl: './std-list.component.html',
  styleUrls: ['./std-list.component.scss']
})
export class StdListComponent implements OnInit {
  @Input() stdArr!:Istudent[]
  @Output() emitEditstd:EventEmitter<Istudent>=new EventEmitter<Istudent>()
  @Output() emitremoveId:EventEmitter<number>=new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }
  trackbyId(index:number,std:Istudent):number{
    return std.id
  }

  onEdit(std:Istudent){
    this.emitEditstd.emit(std)
  }

  onRemove(id:number){
    this.emitremoveId.emit(id)
  }

}
