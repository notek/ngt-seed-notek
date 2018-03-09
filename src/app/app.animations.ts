import { AnimationEntryMetadata } from '@angular/core';
import { trigger, transition, animate, style, query, group, state, keyframes } from '@angular/animations';

export const routeAnimation: AnimationEntryMetadata =
  trigger('routeSwitchAnimation', [
    transition('* <=> *', [
        query(':enter', style({ position: 'fixed', width:'100%', opacity: 0}), { optional: true }),
        query(':leave', style({ position: 'fixed', width:'100%', opacity: 1}), { optional: true }),

        group([
            query(':enter', [
                style({ transform: 'translateX(100px) rotateY(45deg)' }),
                animate('.3s ease-in-out', style({ transform: 'translateX(0) rotateY(0)', opacity: 1 }))
            ], { optional: true }),

            query(':leave', [
                style({ transform: 'translateX(0)' }),
                animate('.3s ease-in-out', style({ transform: 'translateX(-100px)', opacity: 0 }))
            ], { optional: true })
        ])
    ])
]);

export const dialog: AnimationEntryMetadata = trigger('dialog', [
    transition(':enter', [
        animate('.3s ease-in-out', keyframes([
            style({opacity: 0, transform: 'scale(.5)'}),
            style({opacity: .2, transform: 'scale(.8)'}),
            style({opacity: .5, transform: 'scale(1.1)'}),
            style({opacity: 1, transform: 'scale(1)'})
        ]))
    ]),
    transition(':leave', [
        animate('.3s ease-in-out', keyframes([
            style({opacity: 1, transform: 'scale(1)'}),
            style({opacity: .5, transform: 'scale(1.1)'}),
            style({opacity: .1, transform: 'scale(.8)'}),
            style({opacity: 0, transform: 'scale(.5)'})
        ]))
    ])
]);