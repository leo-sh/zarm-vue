import SearchBar from '@/search-bar';
import { createTest, createVue, destroyVM } from '../util';

describe('SearchBar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(SearchBar, {
      prefixCls: 'za-search-bar',
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      expect(el.querySelector('.za-search-bar')).to.exsit;
    });
  });

  it('shape', () => {
    vm = createTest(SearchBar, {
      prefixCls: 'za-search-bar',
      shape: 'round',
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      expect(el.querySelector('.shape-round')).to.exsit;
    });
  });

  it('placeholder', () => {
    vm = createTest(SearchBar, {
      prefixCls: 'za-search-bar',
    }, true);
    const el = vm.$el;
    vm.$nextTick(() => { // eslint-disable-line no-unused-vars
      const placholderText = el.querySelector('.za-search-bar-mock-placeholder').innerText;
      expect(placholderText).to.equal('搜索');
    });
  });

  it('clear', done => {
    let result;
    vm = createVue({
      template: `
        <za-search-bar placeholder="搜索" 
          shape="round"
          cancelText="取消" 
          :showCancel="true" 
          value="默认搜索关键字"
          @clear="handleClear"
        />
      `,
      methods: {
        handleClear(val) {
          result = val;
        },
      },
    }, true);
    vm.$nextTick(() => {
      document.querySelector('.za-input-clear').click();
      vm.$nextTick(() => {
        expect(result).to.equal('');
        done();
      });
    });
  });

  it('cancel', done => {
    vm = createVue({
      template: `
        <za-search-bar placeholder="搜索" 
          shape="round"
          cancelText="取消" 
          :showCancel="true" 
          value="默认搜索关键字"
        />
      `,
    }, true);
    vm.$nextTick(() => {
      document.querySelector('.za-input-clear').click();
      vm.$nextTick(() => {
        const searchInputEl = document.querySelector('input[type="search"]');
        expect(searchInputEl.value).to.equal('');
        done();
      });
    });
  });
});
