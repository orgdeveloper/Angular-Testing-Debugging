import { TestBed, inject } from '@angular/core/testing';

import { XyzUserListService } from './user-list.service';

describe('UserListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XyzUserListService]
    });
  });

  it('should be created', inject([XyzUserListService], (service: XyzUserListService) => {
    expect(service).toBeTruthy();
  }));
});
