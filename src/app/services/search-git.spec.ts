import { TestBed } from '@angular/core/testing';

import { SearchGitService } from './search-git.services';

describe('SearchGitService', () => {
  let service: SearchGitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchGitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});