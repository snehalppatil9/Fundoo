import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NotesService } from './notes.service';

describe('NotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: NotesService = TestBed.get(NotesService);
    expect(service).toBeTruthy();
  });
  it('should get users', inject([HttpTestingController, NotesService],
    (httpMock: HttpTestingController, NotesService: NotesService) => {
      expect(NotesService).toBeTruthy();
    }
  )
);
});
