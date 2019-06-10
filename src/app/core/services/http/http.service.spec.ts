import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
  it('should get users', inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, HttpService: HttpService) => {
      expect(HttpService).toBeTruthy();
    }
  )
);
});
