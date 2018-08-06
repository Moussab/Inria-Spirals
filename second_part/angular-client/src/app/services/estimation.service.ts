import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EstimationService {

  constructor(private http: HttpClient) { }
  subject = new Subject<any>();

  result = {
      'nb_coords_eval': 47,
    'nb_coords_ref': 115,
    'eval_coordinates': [
      [3.1458771228790283, 50.60350578951802],
      [3.1460273265838623, 50.60358750239499],
      [3.1462419033050537, 50.60366240574093],
      [3.1464672088623047, 50.603778165222856],
      [3.1467461585998535, 50.60389392442001],
      [3.14683198928833, 50.603934780539255],
      [3.147057294845581, 50.60402330200925],
      [3.1473898887634273, 50.60413906060337],
      [3.1476366519927974, 50.6042820561206],
      [3.147958517074585, 50.60439100479444],
      [3.148280382156372, 50.60455442733225],
      [3.1485700607299805, 50.60489488912978],
      [3.148527145385742, 50.60518087513604],
      [3.1485378742218018, 50.60560985088639],
      [3.1487202644348145, 50.605854978130715],
      [3.149203062057495, 50.606243093655976],
      [3.1498146057128906, 50.60654949838824],
      [3.150157928466797, 50.606651632855595],
      [3.1508874893188477, 50.606767384983925],
      [3.1519174575805664, 50.606889945750574],
      [3.1525290012359615, 50.6070669774055],
      [3.1531941890716553, 50.60732571477993],
      [3.1536126136779785, 50.60757083308535],
      [3.15407395362854, 50.60806106586524],
      [3.154213428497314, 50.608598954288446],
      [3.153902292251587, 50.60951130793223],
      [3.153795003890991, 50.60981088288215],
      [3.1535696983337402, 50.60991301026998],
      [3.153494596481323, 50.60996066964177],
      [3.1533175706863403, 50.61017513621734],
      [3.153172731399536, 50.61073002139169],
      [3.152850866317749, 50.61127468759041],
      [3.152260780334472, 50.61145170274724],
      [3.1513166427612305, 50.6115538265732],
      [3.150683641433716, 50.61179211463833],
      [3.149707317352295, 50.611819347483205],
      [3.1485700607299805, 50.61159467604153],
      [3.1476581096649165, 50.61143808622035],
      [3.1468427181243896, 50.61117256315849],
      [3.1466925144195557, 50.610845763486545],
      [3.1466603279113765, 50.6107164046559],
      [3.146231174468994, 50.610430452294494],
      [3.145287036895752, 50.61018534888703],
      [3.1446433067321777, 50.60996066964177],
      [3.143892288208008, 50.60976322335861],
      [3.142991065979004, 50.60963386155138],
      [3.1426584720611572, 50.609361519741924]
    ],
    'estimation_of_error': [
      0.021968121565017477,
      0.02243318763930868,
      0.022879423499266367,
      0.022926328922928695,
      0.02371649591170124,
      0.023372313970373364,
      0.02541807546078792,
      0.028260685864171613,
      0.025262304346492896,
      0.02541787684344156,
      0.02325204138937406,
      0.02575397872549693,
      0.04573412359031947,
      0.07626920507757774,
      0.061388912816537224,
      0.04713939983951373,
      0.04606831937073404,
      0.05110334851376735,
      0.06663417000948875,
      0.10004463089373886,
      0.10860464273734678,
      0.11010385810716332,
      0.08304864448233572,
      0.038228500782771076,
      0.02251695851760412,
      0.06410386940226652,
      0.06951184883531514,
      0.059210653902676665,
      0.05657550649693706,
      0.052009215200990305,
      0.06812714202406066,
      0.07545944364417095,
      0.061040210110389105,
      0.03929852825492067,
      0.04544307611399927,
      0.03610400462427126,
      0.030262846980256813,
      0.05513120163386154,
      0.06753911495325654,
      0.04126382897766354,
      0.03421263510532408,
      0.06119615384554911,
      0.09985578262837853,
      0.0751610028111226,
      0.051852428417507354,
      0.03868235202734358,
      0.019690241163211164]
  };

  getErrorEstimation() {
    this.http.get('http://localhost:8080/api/estimation', httpOptions).subscribe(
      data => {
        this.subject.next(data);
      }
    );
    return this.subject;
  }
}
