/**
 * Formats a period of experience given a start and end date, returning an object with the formatted date range and tenure.
 * @param {string} startDate                      - The start date in 'YYYY-MM' format.
 * @param {string|null} endDate                   - The end date in 'YYYY-MM' format or null for ongoing experience.
 * @param {Date} [referenceDate=new Date()]       - The reference date to use for calculating tenure if endDate is null.
 * @returns {{dateRange: string, tenure: string}} - An object containing the formatted date range and tenure.
 */
const monthFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

/**
 * Parses a date string in 'YYYY-MM' format and returns an object with the year and month as numbers.
 * @param {string} value                    - The date string to parse.
 * @returns {{year: number, month: number}} - An object containing the year and month.
 */
const parseMonth = (value) => {
  const [year, month] = value.split('-').map(Number);

  return { year, month };
};

/**
 * Formats a month and year in 'YYYY-MM' format.
 * @param {string} value - The date string to format.
 * @returns {string}     - The formatted date string.
 */
const formatMonth = (value) => {
  const {
    year,
    month,
  } = parseMonth(value);

  return monthFormatter.format(new Date(Date.UTC(year, month - 1, 1)));
};

/**
 * Formats the tenure based on the total number of months.
 * @param {number} totalMonths - The total number of months.
 * @returns {string}           - The formatted tenure string.
 */
const formatTenure = (totalMonths) => {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];

  if (years) {
    parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
  }

  if (months) {
    parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`);
  }

  return parts.join(' ');
};

/**
 * Formats a period of experience given a start and end date, returning an object with the formatted date range and tenure.
 * @param {Object} params                           - The parameters object.
 * @param {string} params.startDate                 - The start date in 'YYYY-MM' format.
 * @param {string|null} params.endDate              - The end date in 'YYYY-MM' format or null for ongoing experience.
 * @param {Date} [params.referenceDate=new Date()]  - The reference date to use for calculating tenure if endDate is null.
 * @returns {{dateRange: string, tenure: string}}   - An object containing the formatted date range and tenure.
 */
export const formatExperiencePeriod = ({ startDate, endDate, referenceDate = new Date() }) => {
  const start = parseMonth(startDate);
  const end = endDate
    ? parseMonth(endDate)
    : { year: referenceDate.getFullYear(), month: referenceDate.getMonth() + 1 };
  const totalMonths = Math.max(((end.year - start.year) * 12) + end.month - start.month + 1, 1);

  return {
    dateRange: `${formatMonth(startDate)} – ${endDate ? formatMonth(endDate) : 'Present'}`,
    tenure: formatTenure(totalMonths),
  };
};
