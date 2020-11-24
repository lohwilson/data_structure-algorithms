function binarySearch(arr, item, first = 0, last = null) {
  if (!last) last = arr.length
  let midpoint = Math.floor((last - first) / 2) + first
  if (arr[midpoint] === item) return midpoint
  if (arr[midpoint] > item) return binarySearch(arr, item, first, midpoint)
  if (arr[midpoint] < item) return binarySearch(arr, item, midpoint, last)
}