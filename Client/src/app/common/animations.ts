import { trigger, style, animate, transition, keyframes } from '@angular/animations';

export const fallFromSkyAnimation = trigger('fallFromSkyAnimation', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)', opacity: 0 }),
    animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
  ])
]);

export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.5s ease-out', style({ opacity: 1 }))
  ])
]);

export const buttonAppearAnimation = trigger('buttonAppearAnimation', [
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0 }),
    animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
  ])
]);


export const blurToNormalAnimation = trigger('blurToNormalAnimation', [
    transition(':enter', [
      style({ filter: 'blur(10px)', opacity: 0 }),
      animate('0.5s ease-out', style({ filter: 'blur(0)', opacity: 1 }))
    ])
  ]);
