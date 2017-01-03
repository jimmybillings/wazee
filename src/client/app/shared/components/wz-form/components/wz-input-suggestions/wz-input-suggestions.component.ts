import { Component, Input, Output, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Renderer, OnDestroy, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs/Rx';
import { ApiService } from '../../../../services/api.service';
import { Api, ApiResponse } from '../../../../interfaces/api.interface';

@Component({
    moduleId: module.id,
    selector: 'wz-input-suggestions',
    template: `<ng-content></ng-content>
            <div class="suggestions-menu" *ngIf="suggestions.length > 1" [ngClass]="{'revealed': suggestions.length > 1}">
              <div *ngIf="rawField.suggestionHeading" (click)="closeSuggestions()" md-line class="heading">{{ rawField.suggestionHeading | translate}}</div>
              <md-list>
                <md-list-item *ngFor="let suggestion of suggestions">
                  <button *ngIf="!isCollection()" (click)="selectSuggestion(suggestion)" [ngClass]="{'active': activeSuggestion == suggestion}" [innerHTML]="parseSuggestion(suggestion)">
                  </button>
                  <button *ngIf="isCollection()" (click)="selectSuggestion(suggestion)" [ngClass]="{'active': activeSuggestion == suggestion}">
                    {{suggestion}}
                  </button>
                </md-list-item>
              </md-list>
            </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: ['md-list-item:first-child{ display: none;}']
})

export class WzInputSuggestionsComponent implements OnInit, OnDestroy {

    @Input() fControl: FormControl;
    @Input() rawField: any;
    @Output() newSuggestion = new EventEmitter();

    public suggestions: Array<string> = [];
    public activeSuggestion: string;

    private clickCatcher: any;
    private inputSubscription: Subscription;
    private userInput: string = '';

    constructor(
        private renderer: Renderer,
        private api: ApiService,
        private detector: ChangeDetectorRef) { }

    ngOnInit() {
        this.clickCatcher = this.renderer.listenGlobal('body', 'click', this.closeSuggestions.bind(this));
        this.suggestionChangeListener();
    }

    ngOnDestroy() {
        this.clickCatcher();
        this.destroySubscription();
    }

    public destroySubscription() {
        if (this.inputSubscription) this.inputSubscription.unsubscribe();
    }

    public suggestionChangeListener() {
        if (this.fControl) {
            this.inputSubscription = this.fControl.valueChanges
                .filter((value: string) => value !== this.activeSuggestion)
                .switchMap((query: string) => {
                    this.activeSuggestion = null;
                    if (query && query.length > 1) {
                        return this.query(query);
                    } else {
                        this.closeSuggestions();
                        return [];
                    }
                })
                .map(response => (response['items'] || response['list'] || []).map((item: any) => item.name || item))
                .do((suggestions) => {
                    this.suggestions = this.normalizeSuggestions(suggestions);
                    this.userInput = this.fControl.value;
                })
                .subscribe(() => this.detector.markForCheck());
        }
    }

    public closeSuggestions() {
        this.activeSuggestion = null;
        this.suggestions = [];
        this.detector.markForCheck();
    }

    public selectSuggestion(suggestion: string) {
        this.fControl.setValue(suggestion);
        this.newSuggestion.emit(this.activeSuggestion);
        this.closeSuggestions();
    }

    public parseSuggestion(suggestion: string) {
        return suggestion
            .split(this.userInput)
            .join('<strong>' + this.userInput + '</strong>');
    }

    public inputKeyDown(event: KeyboardEvent): void {
        if (event.which === 9 || event.keyCode === 9) {
            // TAB
            this.closeSuggestions();
        } else if (event.which === 38 || event.keyCode === 38) {
            // UP
            this.upKey(event);
            event.preventDefault();
        } else if (event.which === 40 || event.keyCode === 40) {
            // DOWN
            this.downKey(event);
            event.preventDefault();
        } else if ((event.which === 10 || event.which === 13 ||
            event.keyCode === 10 || event.keyCode === 13)
            && this.suggestions.length > 1) {
            // ENTER
            this.enterKey(event);
            event.preventDefault();
        }
    }

    private upKey(event: KeyboardEvent) {
        // Find the active suggestion in the list
        let activeSuggestionIndex = this.suggestions.indexOf(this.activeSuggestion);

        // If not found, then activate the first suggestion
        if (activeSuggestionIndex === -1) {
            this.setActiveSuggestion(this.suggestions[0]);
            return;
        }

        let suggestion: string;
        // Determine to decrement up the suggestion list or rest to the last.
        suggestion = (activeSuggestionIndex === 0) ?
            // On the first selection so go to the last
            this.suggestions[this.suggestions.length - 1] :
            // Still more suggestion between here and the first so keep decrementing
            this.suggestions[activeSuggestionIndex - 1];
        this.setActiveSuggestion(suggestion);
    }

    private downKey(event: KeyboardEvent) {
        // Find the active suggestion in the list
        let activeSuggestionIndex = this.suggestions.indexOf(this.activeSuggestion);

        // If not found, then activate the first suggestion
        if (activeSuggestionIndex === -1) {
            this.setActiveSuggestion(this.suggestions[1]);
            return;
        }

        let suggestion: string;
        // Determine to increment down the suggestion list or reset to the first.
        suggestion = (activeSuggestionIndex === (this.suggestions.length - 1)) ?
            // On last suggestion so reset to the first.
            this.suggestions[0] :
            // Not on the last suggestion so keep incrementing selected suggestion
            this.suggestions[activeSuggestionIndex + 1];
        this.setActiveSuggestion(suggestion);
    }

    private enterKey(event: KeyboardEvent) {
        // Select the active suggestion  
        if (this.activeSuggestion) {
            this.selectSuggestion(this.activeSuggestion);
        } else {
            this.newSuggestion.emit();
            this.closeSuggestions();
        }
    }

    private setActiveSuggestion(suggestion: string) {
        this.activeSuggestion = suggestion;
        this.fControl.setValue(suggestion);
        this.detector.markForCheck();
    }

    private normalizeSuggestions(suggestions: Array<string>) {
        if (!this.isCollection()) {
            var index = suggestions.indexOf(this.fControl.value);
            if (index > -1) suggestions.splice(index, 1);
        }

        suggestions.unshift(this.fControl.value);
        return suggestions;
    }

    private isCollection() {
        return (this.rawField.endPoint.indexOf('collection') > -1);
    }

    private buildParams() {
        let queryParamsArray: Array<string> = this.rawField.queryParams.split(',').map((item: string) => item.trim());
        let queryParams: any = {};
        for (let i = 0; i < (queryParamsArray.length / 2); i++) {
            queryParams[queryParamsArray[0]] = queryParamsArray[1];
            queryParamsArray.splice(0, 1);
        }
        return queryParams;
    }

    private query(query: string): Observable<ApiResponse> {
        return this.api.get(
            Api.Assets,
            this.rawField.endPoint,
            { parameters: Object.assign({}, this.buildParams(), { text: query }, { q: query }) }
        );
    }
}