import { shallowMount } from '@vue/test-utils';
import { it, describe, expect, beforeEach, vi } from 'vitest';
import ArrowIcon from '../../../assets/icons/Arrow.vue';
import BackToTop from '../BackToTop.vue';

describe('Back To Top Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(BackToTop, {
      computed: {
        hideElement: () => false,
        goToTopComputedClassName: () => '',
      }
    });
  });

  it('should render the ArrowIcon component', () => {
    expect(wrapper.findComponent(ArrowIcon).exists()).to.equal(true);
  });

  it('should call the backToTopGAEvent method when button is clicked', () => {
    // mock the gtag function
    window.gtag = () => {};
    // spy on the gtag function
    const spy = vi.spyOn(window, 'gtag');
    // backToTopGAEvent is called when the button is clicked
    const backToTopButton = wrapper.find('.app-back-to-top-btn');
    backToTopButton.trigger('click');
    // expect the gtag function to have been called
    expect(spy).toHaveBeenCalled();
    // restore the original gtag function
    spy.restore();
  });

  it('should call the scrollToTop method when button is clicked', () => {
    const spy = vi.spyOn(wrapper.vm, 'scrollToTop');
    wrapper.vm.scrollToTop();
    const backToTopButton = wrapper.find('.app-back-to-top-btn');
    backToTopButton.trigger('click');
    expect(spy).toHaveBeenCalled();
    spy.restore();
  });

  it('should have a goToTopComputedClassName computed property that returns a class when hideElement value is true', () => {
    wrapper.vm.hideElement = true;
    expect(wrapper.vm.goToTopComputedClassName).toEqual('go-to-top-btn');
  });

  it('should have a goToTopComputedClassName computed property that returns an empty string when hideElement value is false', () => {
    wrapper.vm.hideElement = false;
    expect(wrapper.vm.goToTopComputedClassName).toEqual('');
  });
});
