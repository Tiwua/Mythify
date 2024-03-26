import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

  subscription: Subscription
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute){
      this.subscription = new Subscription();
    }

  title!: string;
  origin!: string;
  timeline!: string;
  description!: string;
  image!: string;

  form = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    origin: ['', [Validators.required, Validators.minLength(5)]],
    timeline: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    image: ['', [Validators.required, Validators.minLength(10)]]
  });

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(params => {
      const mythId = params.get('mythId');

      const myth = this.apiService.getMyth(mythId!).subscribe((myth) => {

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

  editMyth(){
    if(this.form.invalid){
      return;
    }
    console.log(this.form.value);

    console.log('hello');
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
