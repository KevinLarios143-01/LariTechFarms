import { Injectable } from "@angular/core";
import { fromEvent, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class SwitcherService {
    constructor() { }
      //Sidebar Notification
      private readonly emitSidebarNofitSource = new Subject<any>();
      SidebarNotifyChangeEmitted = this.emitSidebarNofitSource.asObservable();
      emitSidebarNotifyChange(change: any){
        this.emitSidebarNofitSource.next(change);
      }
      //Switcher Notification
      private readonly emitSwitcherSource = new Subject<any>();
      SwitcherChangeEmitted = this.emitSwitcherSource.asObservable();
      emitSwitcherChange(change: any){
        this.emitSwitcherSource.next(change);
      }

    private readonly emitHoverChangeSource = new Subject<any>();
    changeHoverEmitted = this.emitHoverChangeSource.asObservable();
    emitHoverChange(change: any){
      this.emitHoverChangeSource.next(change);
    }
}
