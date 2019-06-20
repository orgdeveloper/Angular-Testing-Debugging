import { Component, OnInit } from '@angular/core';

import { XyzFilterByService } from '../shared/filter-by.service';
import { XyzUserListService } from './user-list.service';
import { WebStorageService} from '../shared/web-storage.service'

@Component({
  selector: 'xyz-user-list',
  providers: [ XyzFilterByService, XyzUserListService ],
  templateUrl: 'user-list.component.html'
})
export class XyzUserListComponent implements OnInit {
  filter: string;
  users: User[];
  settings: {
    _id: string;
    _rev: string;
    rev?: string;
    filter: string;
  }

  constructor(
    private xyzUserListService: XyzUserListService,
    private xyzFilterByService: XyzFilterByService,
    private WebStorageService: WebStorageService
  ) { }

  ngOnInit() {
    this.WebStorageService.getRemote().subscribe( response =>
      {
        this.settings = response.json();
        // console.log(this.settings);
        this.filter = this.settings.filter;

        this.xyzUserListService.get().then(users => {
          this.users = this.xyzFilterByService.get({
            data: users,
            filter: this.filter
          });
        });

      });
    
  }

  onFilter(filter) {
    this.filter = filter;

    this.WebStorageService.setRemote({
      filter: this.filter,
      _rev: (this.settings._rev) ? this.settings._rev : this.settings.rev
    }).subscribe(response => {
      this.settings = response.json()
    })

    this.xyzUserListService.get().then(users => {
      this.users = this.xyzFilterByService.get({ data: users, filter: filter });
    })
  }



  onClear() {
    this.xyzUserListService.get().then(users => this.users = users);
    this.filter = '';

    this.WebStorageService.setRemote({
      filter: '',
      _rev: (this.settings._rev) ? this.settings._rev : this.settings.rev
    }).subscribe(response => {
      this.settings = response.json()
    })
  }
}
