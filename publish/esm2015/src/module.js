import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SimplemdeComponent } from './component';
import { SimplemdeConfig } from './config';
import * as i0 from "@angular/core";
export class SimplemdeModule {
    static forRoot(config) {
        return {
            ngModule: SimplemdeModule,
            providers: [{ provide: SimplemdeConfig, useValue: config }],
        };
    }
}
SimplemdeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SimplemdeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SimplemdeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SimplemdeModule, declarations: [SimplemdeComponent], imports: [CommonModule], exports: [SimplemdeComponent] });
SimplemdeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SimplemdeModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SimplemdeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [SimplemdeComponent],
                    exports: [SimplemdeComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3NyYy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQU8zQyxNQUFNLE9BQU8sZUFBZTtJQUMxQixNQUFNLENBQUMsT0FBTyxDQUNaLE1BQXdCO1FBRXhCLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQzVELENBQUM7SUFDSixDQUFDOzs0R0FSVSxlQUFlOzZHQUFmLGVBQWUsaUJBSFgsa0JBQWtCLGFBRHZCLFlBQVksYUFFWixrQkFBa0I7NkdBRWpCLGVBQWUsWUFKakIsQ0FBQyxZQUFZLENBQUM7MkZBSVosZUFBZTtrQkFMM0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUNsQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU2ltcGxlbWRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaW1wbGVtZGVDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NpbXBsZW1kZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1NpbXBsZW1kZUNvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVtZGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KFxyXG4gICAgY29uZmlnPzogU2ltcGxlbWRlQ29uZmlnLFxyXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U2ltcGxlbWRlTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU2ltcGxlbWRlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNpbXBsZW1kZUNvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9XSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==