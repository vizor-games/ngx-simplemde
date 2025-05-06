import { OnDestroy, AfterViewInit, OnChanges, SimpleChanges, NgZone, SimpleChange } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { SimplemdeConfig, SimplemdeOptions } from './config';
import * as i0 from "@angular/core";
export declare class SimplemdeComponent implements AfterViewInit, OnChanges, OnDestroy, ControlValueAccessor {
    private cog;
    private zone;
    private doc;
    private con;
    private instance;
    private value;
    private onChange;
    options: SimplemdeOptions;
    /** 风格，默认：`antd` */
    style?: 'default' | 'antd';
    /** 延迟初始化 */
    delay: number;
    disabled: boolean;
    get Instance(): any;
    /**
     * Call [setOption](https://codemirror.net/doc/manual.html#setOption) method of Codemirror.
     */
    setOptions(option: string, value: any): void;
    private _getWin;
    constructor(cog: SimplemdeConfig, zone: NgZone, doc: any);
    private initDelay;
    private init;
    private destroy;
    private setDisable;
    ngAfterViewInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    ngOnDestroy(): void;
    writeValue(value: string): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(_fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SimplemdeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SimplemdeComponent, "simplemde", never, { "options": "options"; "style": "style"; "delay": "delay"; "disabled": "disabled"; }, {}, never, never>;
}
