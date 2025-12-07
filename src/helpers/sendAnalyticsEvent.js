/**
 * Sends a Google Analytics event.
 * @param {string} eventCategory - The category of the event.
 * @param {string} eventAction   - The action of the event.
 * @param {string} eventLabel    - The label of the event.
 * @param {number} eventValue    - The value of the event.
 * @return {void}                - No return value.
 */
export const sendGAEvent = (eventCategory, eventAction, eventLabel, eventValue) => {
  if (!eventCategory || !eventAction || !eventLabel || !eventValue) return;
  /* eslint-disable-next-line no-undef */
  gtag('event', eventAction, {
    event_category: eventCategory,
    event_label: eventLabel,
    value: eventValue,
  });
};