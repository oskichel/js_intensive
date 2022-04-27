function selectFromInterval(arr, start, end) {
    function error() {
        throw new Error('Error')
    }
     
  if (typeof start != 'number' || typeof end != 'number') {
       return error();
  } else if (start > end) {
        return arr.filter((item) => typeof item != 'number' ? error() : start >= item && item >= end);
  } else if (start < end) {
        return arr.filter((item) => typeof item != 'number' ? error() : start <= item && item <= end);
  }
};