import {Component, OnInit} from '@angular/core';
import {EstimationService} from './services/estimation.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  information: any = {
    nb_coords_eval: 0,
    nb_coords_ref: 0
  };

  result: any = {
    eval_coordinates: [],
    estimation_of_error: []
  };

  subscription: Subscription;


  constructor(private _estimationService: EstimationService) { }

  ngOnInit() {
    this._estimationService.getErrorEstimation().subscribe(
      (data: any) => {
        this.getErrorEstimation(data);
      }
    );
  }

  private getErrorEstimation(data: any) {
    this.information.nb_coords_eval = data.nb_coords_eval;
    this.information.nb_coords_ref = data.nb_coords_ref;
    this.result.eval_coordinates = data.eval_coordinates;
    this.result.estimation_of_error = data.estimation_of_error;
  }
}
