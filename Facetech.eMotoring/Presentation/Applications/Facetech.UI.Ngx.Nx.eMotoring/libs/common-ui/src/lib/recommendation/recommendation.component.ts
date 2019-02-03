import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'ngx-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
/** recommendation component*/
export class RecommendationComponent implements OnInit {
  recommendationForm: FormGroup;
  severities: SelectItem[];
  submitted: boolean;
  recommendation: string = '';
  shortComing: string = '';
  selectedSeverity: string = 'Low';

  public constructor(
    private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.severities = this.getSeverities();
    this.recommendationForm = this.fb.group({
      'recommendation': new FormControl('', Validators.compose([Validators.minLength(5)])),
      'shortComing': new FormControl('', Validators.compose([Validators.minLength(5)])),
      'severity': new FormControl('')
    }, {
        validator: (formControl) => {
          var recommendation = formControl.controls.recommendation;
          var shortComing = formControl.controls.shortComing;

          if (recommendation != undefined && shortComing != undefined) {
            if (!(recommendation.value.length || shortComing.value.length)) {
              return { invalid: true };
            }
          }
        }
      });
  }

  private getSeverities() {
    return [{
      label: 'High', value: 'High'
    },
    {
      label: 'Moderate', value: 'Moderate'
    },
    {
      label: 'Low', value: 'Low'
    }
    ];
  }

  public onSubmit(value: string) {
    alert('This alert is for testing, submition logic will replace it eventually: ' + JSON.stringify(value));
    this.submitted = true;
  }
}
