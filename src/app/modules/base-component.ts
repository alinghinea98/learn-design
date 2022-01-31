import { Component } from '@angular/core';

@Component({
  selector: 'style-base',
  template: `
        <style-topbar></style-topbar>
        <style-workflow-bar></style-workflow-bar>
        <div class="page-wrapper">
          <style-datenupdate></style-datenupdate>
        </div>
    `,
  styles: [`:host, ::ng-deep .page-wrapper > router-outlet + * { display: flex; flex-direction: column; height: 100%; } .page-wrapper { flex: 1; min-height: 1px }`]
})
export class BaseComponent {
}
