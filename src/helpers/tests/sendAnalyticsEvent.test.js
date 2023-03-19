import { it, describe, expect, beforeEach, vi } from 'vitest';
import sendGAEvent from '../sendAnalyticsEvent';

describe('sendGAEvent', () => {
  const mockGtag = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();

    global.gtag = mockGtag;
  });

  it('should not call gtag if missing arguments', () => {
    sendGAEvent();

    expect(mockGtag).not.toHaveBeenCalled();
  });

  it('should call gtag with the correct arguments', () => {
    const eventCategory = 'testCategory';
    const eventAction = 'testAction';
    const eventLabel = 'testLabel';
    const eventValue = 123;
    const expectedData = {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue,
    }

    sendGAEvent(eventCategory, eventAction, eventLabel, eventValue);

    expect(mockGtag).toHaveBeenCalledTimes(1);
    expect(mockGtag).toHaveBeenCalledWith('event', eventAction, expectedData);
  });
});