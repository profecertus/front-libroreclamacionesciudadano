import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {DownlineTreeviewItem, DropdownTreeviewComponent, TreeviewConfig, TreeviewHelper, TreeviewI18n, TreeviewItem} from 'ngx-treeview';
import {DropdownTreeviewSelectI18n} from './dropdown-treeview-select-i18n';
import {  isNil, remove, reverse } from 'lodash';

@Component({
  selector: 'app-dropdown-treeview-select',
  templateUrl: './dropdown-treeview-select.component.html',
  styleUrls: ['./dropdown-treeview-select.component.scss'],
  providers: [
    { provide: TreeviewI18n, useClass: DropdownTreeviewSelectI18n }
  ]
})
export class DropdownTreeviewSelectComponent implements OnChanges {
  @Input() config: TreeviewConfig;
  @Input() items: TreeviewItem[];
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();
  @ViewChild(DropdownTreeviewComponent, { static: false }) dropdownTreeviewComponent: DropdownTreeviewComponent;
  filterText: string;
  rows: string[];
  private dropdownTreeviewSelectI18n: DropdownTreeviewSelectI18n;

  constructor(
    public i18n: TreeviewI18n
  ) {
    this.config = TreeviewConfig.create({
      hasAllCheckBox: false,
      hasCollapseExpand: true,
      hasFilter: true,
      maxHeight: 400
    });
    this.dropdownTreeviewSelectI18n = i18n as DropdownTreeviewSelectI18n;
    this.updateSelectedItem();
  }

  ngOnChanges(): void {
    if( this.value) {
      const item = TreeviewHelper.findItemInList(this.items, this.value); //9122
      this.selectItem(item);
    }
    this.updateSelectedItem();
  }


  select(item: TreeviewItem): void {
    if (!item.children) {
      this.selectItem(item);
    } else {
      item.collapsed = !item.collapsed;
    }
  }

  private updateSelectedItem(): void {
    if (!isNil(this.items)) {
      const selectedItem = TreeviewHelper.findItemInList(this.items, this.value);
      this.selectItem(selectedItem);
    }
  }

  private selectItem(item: TreeviewItem): void {
    if (this.dropdownTreeviewSelectI18n.selectedItem !== item) {
      this.dropdownTreeviewSelectI18n.selectedItem = item;
      if (this.dropdownTreeviewComponent) {
        this.dropdownTreeviewComponent.onSelectedChange([item]);
      }

      if (item) {
        if (this.value !== item.value) {
          this.value = item.value;
          this.valueChange.emit(item.value);
        }
      }
    }
  }
}
