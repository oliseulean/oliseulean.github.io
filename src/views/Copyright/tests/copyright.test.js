import { mount } from '@vue/test-utils';
import Copyright from '../../Copyright/Copyright.vue';
import { it, describe, expect, beforeEach } from 'vitest';

describe('Copyright', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Copyright);
  });

  it('component renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render the author name', () => {
    expect(wrapper.html()).toContain('Designed by Olimpiu Șeulean');
  });
});
