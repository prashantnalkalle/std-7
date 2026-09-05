import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Istudent } from '../../module/std';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit ,OnChanges {
  iseditmode:boolean = false
  editId!:number
  @Input() editObj!:Istudent
  @Output() emitnewStd:EventEmitter<Istudent> = new EventEmitter<Istudent>()
  @Output() emitupdatestd:EventEmitter<Istudent> = new EventEmitter<Istudent>()
  @ViewChild('stdform') stdform!:NgForm

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['editObj']['firstChange']){
      let editStd:Istudent = changes['editObj']['currentValue']
      this.iseditmode=true
      this.editId = editStd.id
      this.stdform.form.patchValue(editStd)
    } 
  }

  onAdd(){
    if(this.stdform.valid){
      let newstd:Istudent={...this.stdform.value,id:Date.now()}
      this.stdform.reset()
      this.emitnewStd.emit(newstd)
    }
  }

  onUpdate(){
    if(this.stdform.valid){
      let updateId :number = this.editId
      let UpdateObj:Istudent = {...this.stdform.value,id:updateId}
      this.iseditmode =false
      this.stdform.reset()
      this.emitupdatestd.emit(UpdateObj)
    }
  }
}
