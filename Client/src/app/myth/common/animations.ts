import { trigger, style, animate, transition, keyframes, state } from '@angular/animations';

export const formAnimation = trigger('formAnimation', [
  transition(':enter', [
    animate('1s ease-out', keyframes([
      style({ opacity: 0, transform: 'scale(0.5)', offset: 0 }),
      style({ opacity: 0.5, transform: 'scale(1.1)', offset: 0.5 }),
      style({ opacity: 1, transform: 'scale(1)', offset: 1 })
    ]))
  ]),
]);

export const slideFromBottomAnimation = trigger('slideFromBottomAnimation', [
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0 }),
    animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
  ])
]);

export const zoomInAnimation = trigger('zoomInAnimation', [
    transition(':enter', [
      style({ transform: 'scale(0.5)', opacity: 0 }),
      animate('0.5s ease-out', style({ transform: 'scale(1)', opacity: 1 }))
    ])
  ]);

export const likeAnimation = trigger('likeAnimation', [
    state('liked', style({
      transform: 'scale(1.1) rotate(360deg)',
      fontSize: '70px'
    })),
    state('disliked', style({
      transform: 'scale(1) rotate(0deg)',
      fontSize: '50px'
    })),
    transition('liked <=> disliked', animate('200ms ease-out'))
  ]);
