const bytesToMegabytes = (bytes: number): number => {
  const bytesInMegabyte = 1048576 // 1 MB = 1048576 Bytes (2^20)
  const megabytes = bytes / bytesInMegabyte
  return Number(megabytes.toFixed(2))
}

export { bytesToMegabytes }
