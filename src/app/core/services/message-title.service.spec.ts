import { TestBed } from '@angular/core/testing';

import { MessageTitleService } from './message-title.service';

describe('MessageTitleService', () => {
  let service: MessageTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
