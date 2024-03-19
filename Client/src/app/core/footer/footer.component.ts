import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
    showFooter: boolean = false;
    timeoutId!: ReturnType<typeof setTimeout> | undefined; // Initialize it as undefined

    constructor() {}

    ngOnInit() {
        // Make sure setTimeout is called only once
        if (!this.timeoutId) {
            // Simulate a delay before showing the footer
            this.timeoutId = setTimeout(() => {
              console.log(this.showFooter)
                this.showFooter = true;
            }, 100); // Adjust the delay time as needed (in milliseconds)
        }
    }

    ngOnDestroy() {
        // Clear the timeout when the component is destroyed
        console.log(this.showFooter);
        this.showFooter = false;
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }
}
