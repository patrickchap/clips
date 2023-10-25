import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();

  constructor() { }

  ngAfterContentInit(): void {
    const activeTab = this.tabs?.filter(t => t.active === true);
    if(!activeTab || activeTab.length === 0){
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent){
    if(!tab) return false;
    this.tabs.forEach(t => {
      t.active = false;
    });
    tab.active = true;
    return false;
  }
}
