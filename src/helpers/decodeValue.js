function decodeValue(value) {
  const textDecoder = new TextDecoder("utf-8");

  return textDecoder.decode(value);
}

export default decodeValue;
