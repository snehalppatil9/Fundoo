import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
  it('should get users', inject([HttpTestingController, DataService],
    (httpMock: HttpTestingController, DataService: DataService) => {
      expect(DataService).toBeTruthy();
    }
  )
);
});
