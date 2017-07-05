/**
 *  Prints a warning in the console if it exists.
 *  @param {String} message The warning message
 */


const warning = (message) => {
  //eslint-disable no-console
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message)
  }

  try {
    throw new Error(message)
  } catch (e) {}
}
export default warning;
