import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { UiConfig} from '../../shared/services/ui.config';
import { Subscription } from 'rxjs/Rx';

/**
 * site footer component - renders the footer information
 */
@Component({
  moduleId: module.id,
  selector: 'app-footer',
  templateUrl: 'footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FooterComponent implements OnInit {
  @Input() currentUser: any;
  @Input() supportedLanguages: any;
  @Output() onChangeLang = new EventEmitter();
  public lang: any;
  public config: any;
  public configSubscription: Subscription;

  constructor(
    public uiConfig: UiConfig) {}

  ngOnInit() {
    this.lang = this.supportedLanguages[0].code;
    this.configSubscription = this.uiConfig.get('footer').subscribe((config) => {
      this.config = config.config;
    });
  }

  public changeLang(e: any) {
    this.onChangeLang.emit(e.target.value);
  }
}
