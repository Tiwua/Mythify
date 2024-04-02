import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { formAnimation } from '../common/animations';
import { FormService } from 'src/app/shared/form.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  animations: [formAnimation]
})
export class EditComponent implements OnInit, OnDestroy {
  subscription: Subscription
  form: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private formService: FormService){
      this.form = formService.createMythForm();
      this.subscription = new Subscription();
    }

  mythId!: string | null;  
  title!: string;
  origin!: string;
  timeline!: string;
  description!: string;
  image!: string;


  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(params => {
      this.mythId = params.get('mythId');
      const myth = this.apiService.getMyth(this.mythId!).subscribe((myth) => {

        this.form.patchValue({
          title: myth.title,
          origin: myth.origin,
          timeline: myth.timeline,
          description: myth.description,
          image: myth.image
        });
      });
    });
  }

  editMyth(): void{

    if(this.form.invalid){
      console.log('no')
      return;
    }

    const { title, origin, timeline, description, image } = this.form.value

    this.apiService.editMyth(this.mythId!, title!, origin!, timeline!, description!, image!).subscribe(() => {
        this.router.navigate([`/myths/${this.mythId}/details`])
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
