import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
    showFooter: boolean = false;
    timeoutId!: ReturnType<typeof setTimeout> | undefined;

    constructor() {}

    ngOnInit() {
        if (!this.timeoutId) {
            this.timeoutId = setTimeout(() => {
              console.log(this.showFooter)
                this.showFooter = true;
            }, 100);
        }
    }

    ngOnDestroy() {
        console.log(this.showFooter);
        this.showFooter = false;
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }
}
