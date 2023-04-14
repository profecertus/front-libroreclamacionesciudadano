import {Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {StorageService} from '../services/storage/storage.service';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective implements OnInit {

  private actions = [];
  private permissions = []; // [Actions.SUPER_ADMIN]
  private logicalOp = 'AND';
  private isHidden = true;

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private storageService: StorageService
  ) {

  }

  ngOnInit() {
      this.actions = this.storageService.getActions();
      this.updateView();
  }

  @Input()
  set appHasPermission(val) {
    this.permissions = [...this.permissions, ...val];
    // this.updateView();
  }

  @Input()
  set appHasPermissionOp(permop) {
    this.logicalOp = permop;
    // this.updateView();
  }

  private updateView() {
    if (this.checkPermission()) {
      if (this.isHidden) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.isHidden = false;
      }
    } else {
      this.isHidden = true;
      this.viewContainer.clear();
    }
  }

  private checkPermission() {
    let hasPermission = false;

    if (this.actions != null && this.actions.length > 0) {
      for (const checkPermission of this.permissions) {
        const permissionFound = this.actions.find(x => x.toUpperCase() === checkPermission.toUpperCase());

        if (permissionFound) {
          hasPermission = true;

          if (this.logicalOp === 'OR') {
            break;
          }
        } else {
          hasPermission = false;
          if (this.logicalOp === 'AND') {
            break;
          }
        }
      }
    }

    return hasPermission;
  }

}
