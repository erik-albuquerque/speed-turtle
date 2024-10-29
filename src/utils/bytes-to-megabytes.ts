const bytesToMegabytes = (bytes: number, fractionDigits = 1): number => {
  const bytesInDecimal = 1000 * 1000 // 1 MB = 1.000.00 Bytes (Decimal base)
  const megabytes = bytes / bytesInDecimal
  return Number(megabytes.toFixed(fractionDigits))
}

export { bytesToMegabytes }
