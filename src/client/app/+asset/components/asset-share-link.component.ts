import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
/**
 * Directive that renders a list of collections
 */

@Component({
  moduleId: module.id,
  selector: 'asset-share-link',
  templateUrl: 'asset-share-link.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AssetShareLinkComponent {
  @Input() uiState: any;
  @Input() assetLink: string;
  @Output() close = new EventEmitter();

  public closeAssetShareLink(): void {
    this.uiState.closeAssetShareLink();
  }

  public selectInputForCopy(event:any): void {
    event.target.select();
  }
}
