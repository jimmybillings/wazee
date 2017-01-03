import {
  beforeEachProvidersArray,
  Observable,
  Injectable,
  inject,
  TestBed
} from '../../../imports/test.imports';

import { CollectionListDdComponent } from './collections-list-dd.component';
import { CollectionsService } from '../../../shared/services/collections.service';
import { ActiveCollectionService } from '../../../shared/services/active-collection.service';

export function main() {
  describe('Collection List component', () => {
    @Injectable()
    class MockCollectionsService {
      public createCollection(collection: any): Observable<any> {
        return Observable.of({});
      }
      public createCollectionInStore(collection: any): any {
        return true;
      }
      public updateFocusedCollection(collection: any): any {
        return true;
      }
    }

    class MockActiveCollectionService {
      public data: Observable<any>;
      constructor() {
        this.data = Observable.of({ id: 1 });
      }
      load() {
        return Observable.of({ id: 2 });
      }
      set() {
        return Observable.of({});
      }

      getItems() {
        return Observable.of({});
      }
    }

    beforeEach(() => TestBed.configureTestingModule({
      providers: [
        ...beforeEachProvidersArray,
        CollectionListDdComponent,
        { provide: CollectionsService, useClass: MockCollectionsService },
        { provide: ActiveCollectionService, useClass: MockActiveCollectionService }
      ]
    }));

    it('Should detect the user is not on the collection show page and navigate there',
      inject([CollectionListDdComponent], (component: CollectionListDdComponent) => {
        component.router.url = '/collection/23894987';
        spyOn(component, 'navigateToCollectionShow');
        component.selectFocusedCollection(mockCollectionResponse());
        expect(component.navigateToCollectionShow).toHaveBeenCalledWith(158);
      }));

    it('Should detect the user is on the collection show page and get the new active collection',
      inject([CollectionListDdComponent], (component: CollectionListDdComponent) => {
        component.pageSize = '50';
        component.router.url = '/search/23894987';
        spyOn(component.activeCollection, 'load').and.callThrough();
        spyOn(component, 'closeCollectionsList');
        component.selectFocusedCollection(mockCollectionResponse());
        expect(component.activeCollection.load).toHaveBeenCalledWith(158);
        // expect(component.closeCollectionsList).toHaveBeenCalled();
      }));

  });
}

function mockCollectionResponse() {
  return {
    'createdOn': '2016-06-03T17:09:16Z',
    'lastUpdated': '2016-06-24T03:14:14Z',
    'id': 158,
    'siteName': 'core',
    'name': 'Masters Opening Cerimony',
    'owner': 1,
    'items': [
      {
        'createdOn': '2016-06-16T17:53:17Z',
        'lastUpdated': '2016-06-16T17:53:17Z',
        'id': 155, 'siteName': 'core',
        'name': 'Cat',
        'owner': 'ross.edfort@wazeedigital.com',
        'assets': [28296444],
        'tags': ['meow']
      }
    ],
    'totalCount': 2,
    'currentPage': 0,
    'pageSize': 2,
    'hasNextPage': false,
    'hasPreviousPage': false,
    'numberOfPages': 1
  };
}

