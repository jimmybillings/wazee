import { AssetComponent } from './asset.component';

export function main() {
  describe('Asset Component', () => {
    let componentUnderTest: AssetComponent;

    beforeEach(() => {
      componentUnderTest = new AssetComponent();
    });

    describe('initialization', () => {
      it('caches the asset\'s metadata', () => {
        componentUnderTest.asset = {
          assetId: 0,
          assetName: '',
          startTime: 0,
          endTime: 0,
          thumbnailUrl: '',
          metadata: [
            { name: 'a', value: 'b' },
            { name: 'c', value: 'd' }
          ]
        };

        componentUnderTest.ngOnInit();

        expect(componentUnderTest.metadata).toEqual({ a: 'b', c: 'd' });
      });
    });

    describe('translationReady()', () => {
      it('Creates a translation ready version of a fieldname', () => {
        expect(componentUnderTest.translationReady('some.field.name'))
          .toEqual('assetmetadata.some_field_name');
      });
    });
  });
};
