import { Component, Input, forwardRef, ChangeDetectionStrategy, ViewChild, Inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SimplemdeConfig } from './config';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "./config";
export class SimplemdeComponent {
    constructor(cog, zone, doc) {
        this.cog = cog;
        this.zone = zone;
        this.doc = doc;
        this.value = '';
        this.options = {};
        this.disabled = false;
        cog = Object.assign(Object.assign({}, new SimplemdeConfig()), cog);
        this.style = cog.style;
        this.delay = cog.delay || 0;
    }
    get Instance() {
        return this.instance;
    }
    /**
     * Call [setOption](https://codemirror.net/doc/manual.html#setOption) method of Codemirror.
     */
    setOptions(option, value) {
        if (!this.instance) {
            return;
        }
        this.instance.codemirror.setOption(option, value);
    }
    _getWin() {
        return this.doc.defaultView || window;
    }
    initDelay() {
        if (!(typeof document === 'object' && !!document)) {
            return;
        }
        if (this.delay > 0) {
            setTimeout(() => this.init(), this.delay);
        }
        else {
            this.init();
        }
    }
    init() {
        const win = this._getWin();
        if (typeof win.SimpleMDE === 'undefined') {
            throw new Error(`Could not find SimpleMDE object.`);
        }
        this.destroy();
        const config = Object.assign(Object.assign(Object.assign({}, this.cog), this.options), (this.style === 'antd'
            ? {
                spellChecker: false,
                autoDownloadFontAwesome: false,
            }
            : {}));
        config.element = this.con.nativeElement;
        this.zone.runOutsideAngular(() => {
            this.instance = new win.SimpleMDE(config);
            if (this.value) {
                this.instance.value(this.value);
            }
            this.instance.codemirror.on('change', () => {
                this.value = this.instance.value();
                this.zone.run(() => this.onChange(this.value));
            });
            this.setDisable();
        });
    }
    destroy() {
        if (this.instance) {
            this.instance.toTextArea();
            this.instance = null;
        }
    }
    setDisable() {
        if (this.instance) {
            this.zone.runOutsideAngular(() => (this.instance.codemirror.options.readOnly = this.disabled));
        }
    }
    ngAfterViewInit() {
        this.initDelay();
    }
    ngOnChanges(changes) {
        if (changes.options && !changes.options.firstChange) {
            this.initDelay();
        }
    }
    ngOnDestroy() {
        this.destroy();
    }
    writeValue(value) {
        this.value = value;
        if (this.instance) {
            this.instance.value(this.value);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(_fn) { }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.setDisable();
    }
}
SimplemdeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SimplemdeComponent, deps: [{ token: i1.SimplemdeConfig }, { token: i0.NgZone }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component });
SimplemdeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: SimplemdeComponent, selector: "simplemde", inputs: { options: "options", style: "style", delay: "delay", disabled: "disabled" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SimplemdeComponent),
            multi: true,
        },
    ], viewQueries: [{ propertyName: "con", first: true, predicate: ["con"], descendants: true }], usesOnChanges: true, ngImport: i0, template: ` <textarea #con></textarea> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SimplemdeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'simplemde',
                    template: ` <textarea #con></textarea> `,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SimplemdeComponent),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.SimplemdeConfig }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { con: [{
                type: ViewChild,
                args: ['con']
            }], options: [{
                type: Input
            }], style: [{
                type: Input
            }], delay: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3NyYy9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUdWLHVCQUF1QixFQUt2QixTQUFTLEVBRVQsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFvQixNQUFNLFVBQVUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQWMzQyxNQUFNLE9BQU8sa0JBQWtCO0lBZ0M3QixZQUFvQixHQUFvQixFQUFVLElBQVksRUFBNEIsR0FBUTtRQUE5RSxRQUFHLEdBQUgsR0FBRyxDQUFpQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFBNEIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQTdCMUYsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUlsQixZQUFPLEdBQXFCLEVBQUUsQ0FBQztRQUsvQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBcUJqQyxHQUFHLG1DQUFRLElBQUksZUFBZSxFQUFFLEdBQUssR0FBRyxDQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQXRCRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVSxDQUFDLE1BQWMsRUFBRSxLQUFVO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxRQUFR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TTtpQkFDaEQ7OzBCQWlDa0UsTUFBTTsyQkFBQyxRQUFROzRDQS9CdEQsR0FBRztzQkFBNUIsU0FBUzt1QkFBQyxLQUFLO2dCQU1QLE9BQU87c0JBQWYsS0FBSztnQkFFRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUcsS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBmb3J3YXJkUmVmLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgT25EZXN0cm95LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgTmdab25lLFxyXG4gIFZpZXdDaGlsZCxcclxuICBTaW1wbGVDaGFuZ2UsXHJcbiAgSW5qZWN0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFNpbXBsZW1kZUNvbmZpZywgU2ltcGxlbWRlT3B0aW9ucyB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzaW1wbGVtZGUnLFxyXG4gIHRlbXBsYXRlOiBgIDx0ZXh0YXJlYSAjY29uPjwvdGV4dGFyZWE+IGAsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTaW1wbGVtZGVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpbXBsZW1kZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgQFZpZXdDaGlsZCgnY29uJykgcHJpdmF0ZSBjb24hOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuICBwcml2YXRlIGluc3RhbmNlOiBhbnk7XHJcbiAgcHJpdmF0ZSB2YWx1ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2UhOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxuXHJcbiAgQElucHV0KCkgb3B0aW9uczogU2ltcGxlbWRlT3B0aW9ucyA9IHt9O1xyXG4gIC8qKiDpo47moLzvvIzpu5jorqTvvJpgYW50ZGAgKi9cclxuICBASW5wdXQoKSBzdHlsZT86ICdkZWZhdWx0JyB8ICdhbnRkJztcclxuICAvKiog5bu26L+f5Yid5aeL5YyWICovXHJcbiAgQElucHV0KCkgZGVsYXk6IG51bWJlcjtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBnZXQgSW5zdGFuY2UoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbCBbc2V0T3B0aW9uXShodHRwczovL2NvZGVtaXJyb3IubmV0L2RvYy9tYW51YWwuaHRtbCNzZXRPcHRpb24pIG1ldGhvZCBvZiBDb2RlbWlycm9yLlxyXG4gICAqL1xyXG4gIHNldE9wdGlvbnMob3B0aW9uOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmluc3RhbmNlLmNvZGVtaXJyb3Iuc2V0T3B0aW9uKG9wdGlvbiwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0V2luKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5kb2MuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb2c6IFNpbXBsZW1kZUNvbmZpZywgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnkpIHtcclxuICAgIGNvZyA9IHsgLi4ubmV3IFNpbXBsZW1kZUNvbmZpZygpLCAuLi5jb2cgfTtcclxuICAgIHRoaXMuc3R5bGUgPSBjb2cuc3R5bGU7XHJcbiAgICB0aGlzLmRlbGF5ID0gY29nLmRlbGF5IHx8IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXREZWxheSgpOiB2b2lkIHtcclxuICAgIGlmICghKHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgISFkb2N1bWVudCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGVsYXkgPiAwKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0KCksIHRoaXMuZGVsYXkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB3aW4gPSB0aGlzLl9nZXRXaW4oKTtcclxuICAgIGlmICh0eXBlb2Ygd2luLlNpbXBsZU1ERSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBTaW1wbGVNREUgb2JqZWN0LmApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICBjb25zdCBjb25maWc6IFNpbXBsZW1kZU9wdGlvbnMgPSB7XHJcbiAgICAgIC4uLnRoaXMuY29nLFxyXG4gICAgICAuLi50aGlzLm9wdGlvbnMsXHJcbiAgICAgIC4uLih0aGlzLnN0eWxlID09PSAnYW50ZCdcclxuICAgICAgICA/IHtcclxuICAgICAgICAgICAgc3BlbGxDaGVja2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b0Rvd25sb2FkRm9udEF3ZXNvbWU6IGZhbHNlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDoge30pLFxyXG4gICAgfTtcclxuICAgIGNvbmZpZy5lbGVtZW50ID0gdGhpcy5jb24ubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgd2luLlNpbXBsZU1ERShjb25maWcpO1xyXG4gICAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UudmFsdWUodGhpcy52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pbnN0YW5jZS5jb2RlbWlycm9yLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuaW5zdGFuY2UudmFsdWUoKTtcclxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSkpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXREaXNhYmxlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UudG9UZXh0QXJlYSgpO1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RGlzYWJsZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiAodGhpcy5pbnN0YW5jZS5jb2RlbWlycm9yLm9wdGlvbnMucmVhZE9ubHkgPSB0aGlzLmRpc2FibGVkKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXREZWxheSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyAmJiAhY2hhbmdlcy5vcHRpb25zLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuaW5pdERlbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKF9mbjogKCkgPT4ge30pOiB2b2lkIHt9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLnNldERpc2FibGUoKTtcclxuICB9XHJcbn1cclxuIl19