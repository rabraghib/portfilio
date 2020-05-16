import { TestBed } from '@angular/core/testing';

import { SendMsgService } from './send-msg.service';

describe('SendMsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendMsgService = TestBed.get(SendMsgService);
    expect(service).toBeTruthy();
  });
});
