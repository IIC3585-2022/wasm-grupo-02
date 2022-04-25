#include <emscripten.h>
#include <stdio.h>
#include <stdint.h>

#define max(a,b) \
  ({ __typeof__ (a) _a = (a); \
      __typeof__ (b) _b = (b); \
    _a > _b ? _a : _b; })


int check_equal_sum_backend(
  uint8_t arr[],
  int array_length,
  int sm1,
  int sm2,
  int sm3,
  int current_index
) {
  if (current_index == array_length) {
    if ((sm1 == sm2) && (sm2 == sm3)) {
      return 1;
    }
    return 0;
  }
  int added_to_first = check_equal_sum_backend(
    arr,
    array_length,
    sm1 + arr[current_index],
    sm2,
    sm3,
    current_index + 1
  );

  int added_to_second = check_equal_sum_backend(
    arr,
    array_length,
    sm1,
    sm2 + arr[current_index],
    sm3,
    current_index + 1
  );

  int added_to_third = check_equal_sum_backend(
    arr,
    array_length,
    sm1,
    sm2,
    sm3 + arr[current_index],
    current_index + 1
  );

  // Return maximum value among
  // all above 3 recursive call
  return max(max(added_to_first, added_to_second), added_to_third);
}


int checkEqualSum(uint8_t arr[], int length) {
  int sum1, sum2, sum3;
  sum1 = sum2 = sum3 = 0;

  return check_equal_sum_backend(
    arr,
    length,
    sum1,
    sum2,
    sum3,
    0
  );
}
