import { AnimationEntryMetadata, state } from '@angular/core';
import { trigger, transition, animate, style, query, group } from '@angular/animations';

export const routeAnimation: AnimationEntryMetadata =
  trigger('routeSwitchAnimation', [
    transition('* <=> *', [
        query(':enter', style({ position: 'fixed', width:'100%', opacity: 0 }), { optional: true }),
        query(':leave', style({ position: 'fixed', width:'100%', opacity: 1 }), { optional: true }),

        group([
            query(':enter', [
                style({ transform: 'translateX(100px) rotateY(45deg)' }),
                animate('10s ease-in-out', style({ transform: 'translateX(0) rotateY(0)', opacity: 1 }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0)' }),
                animate('10s ease-in-out', style({ transform: 'translateX(-100px)', opacity: 0 }
            ], { optional: true })
        ])
    ])
]);