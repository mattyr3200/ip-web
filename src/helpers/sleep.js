function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms || DEF_DELAY));
}

export default sleep;
