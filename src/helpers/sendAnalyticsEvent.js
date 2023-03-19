const sendGAEvent = (eventCategory, eventAction, eventLabel, eventValue) => {
  if (!eventCategory || !eventAction || !eventLabel || !eventValue) return;
  /* eslint-disable-next-line no-undef */
  gtag('event', eventAction, {
    event_category: eventCategory,
    event_label: eventLabel,
    value: eventValue,
  });
};

export default sendGAEvent;