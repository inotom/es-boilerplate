import assert from 'power-assert';
import Counter from '../src/models/Counter';

describe('Counter クラス', function() {

  describe('初期化処理', function() {
    let ct;

    beforeEach(function() {
      ct = Counter.createNew();
    });

    it('初期値は 0', function() {
      assert(ct.get() === 0);
    });
  });

  describe('カウントアップ処理', function() {
    let ct;

    beforeEach(function() {
      ct = Counter.createNew();
    });

    it('up 0 to 1', function() {
      assert(ct.up().get() === 1);
    });
  });
});
