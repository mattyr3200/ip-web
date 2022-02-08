function encodeValue(value) {
  const textEncoder = new TextEncoder(); // always utf-8

  return textEncoder.encode(value);
}

export default encodeValue;
