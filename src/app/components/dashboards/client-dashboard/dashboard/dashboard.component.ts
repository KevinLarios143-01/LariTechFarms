import { Component, OnInit } from '@angular/core';

import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

import * as moment from 'moment'; // or date-fns
import * as data from './clientDashboardChatData'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  active = 1;

  maxView = 'year';
  minuteStep = 5;
  minView = 'minute';
  selectedDate!: Date;
  showCalendar = true;
  startView = 'day';
  views = ['minute', 'hour', 'day', 'month', 'year'];
  selectedDate1!: NgbDateStruct;
  selectedTime1!: NgbTimeStruct;
  minuteStep1 = 15; // Set your minute step here

  // Convert to Date object when needed
  get combinedDateTime(): Date | null {
    if (this.selectedDate1 && this.selectedTime1) {
      return new Date(
        this.selectedDate1.year,
        this.selectedDate1.month - 1,
        this.selectedDate1.day,
        this.selectedTime1.hour,
        this.selectedTime1.minute
      );
    }
    return null;
  }

  // If you need to handle changes
  onDateTimeChange() {
    console.log(this.combinedDateTime);
    // Your change logic here
  }



  /**
   * Sample implementation of a `change` event handler.
   * @param event
   *  The change event.
   */
/*
  onCustomDateChange(event: DlDateTimePickerChange<Date>) {
    console.log(event.value);
  }*/

  /**
   * Determines whether or not the specified `minView` option is disabled (valid)
   * considering the current `startView` and `maxView` settings.
   * @param view
   * the target view value.
   */

  isMinViewDisabled(view: any) {
    return (
      this.views.indexOf(view) > this.views.indexOf(this.startView) ||
      this.views.indexOf(view) > this.views.indexOf(this.maxView)
    );
  }

  /**
   * Determines whether or not the specified `maxView` option is disabled (valid)
   * considering the current `startView` and `minView` settings.
   * @param view
   * the target view value.
   */

  isMaxViewDisabled(view: any) {
    return (
      this.views.indexOf(view) < this.views.indexOf(this.startView) ||
      this.views.indexOf(view) < this.views.indexOf(this.minView)
    );
  }

  /**
   * Determines whether or not the specified `startView` option is disabled (valid)
   * considering the current `minView` and `maxView` settings.
   * @param view
   * the target view value.
   */

  isStartViewDisabled(view: any) {
    return (
      this.views.indexOf(this.minView) > this.views.indexOf(view) ||
      this.views.indexOf(this.maxView) < this.views.indexOf(view)
    );
  }

  /**
   * Removes/Adds the picker from the DOM forcing a re-render when
   * the `starView` value changes.
   */

  refresh() {
    this.showCalendar = false;
    setTimeout(() => (this.showCalendar = true), 100);
  }


  constructor() { }

  ngOnInit(): void {
  }

  // Bar Chart 1
  public barChartOptions = data.barChartOptions;
  public barChartData = data.barChartData;
  public barChartType = data.barChartType;
  public barChartPlugins = data.barChartPlugins;

  //Line Chart
  public MultipleChartOptions = data.lineChartOptions
  public MultipleChartData = data.lineChartData
  public MultipleChartType = data.lineChartType

  public donutData = data.DonutChartData;

  images = [
    './assets/images/png/task3.png',
    './assets/images/png/task1.png',
    './assets/images/png/task2.png',
  ]
}
