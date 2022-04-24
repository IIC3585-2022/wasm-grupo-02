#include <emscripten.h>
#include <stdio.h>
#include <stdint.h>
#include <time.h>
#include <sys/time.h>

 #define max(a,b) \
   ({ __typeof__ (a) _a = (a); \
       __typeof__ (b) _b = (b); \
     _a > _b ? _a : _b; })

long long current_timestamp() {
    struct timeval te; 
    gettimeofday(&te, NULL); // get current time
    long long milliseconds = te.tv_sec*1000LL + te.tv_usec/1000; // calculate milliseconds
    // printf("milliseconds: %lld\n", milliseconds);
    return milliseconds;
}
// Utility function to check array can
// be partition to 3 subsequences of
// equal sum or not

int checkEqualSumUtil(uint8_t arr[], int N,
                      int sm1, int sm2,
                      int sm3, int j)
{   
  // Base Case
  if (j == N)
  {
    if (sm1 == sm2 && sm2 == sm3)
      return 1;
    else
      return 0;
  }
 
  else
  {
    // When element at index
    // j is added to sm1
    int l = checkEqualSumUtil(arr, N,
                              sm1 + arr[j],
                              sm2, sm3, j + 1);
 
    // When element at index
    // j is added to sm2
    int m = checkEqualSumUtil(arr, N, sm1,
                              sm2 + arr[j],
                              sm3, j + 1);
 
    // When element at index
    // j is added to sm3
    int r = checkEqualSumUtil(arr, N, sm1, sm2,
                              sm3 + arr[j], j + 1);
 
    // Return maximum value among
    // all above 3 recursive call
    return max(max(l, m), r);
  }
}
 
// Function to check array can be
// partition to 3 subsequences of
// equal sum or not
long checkEqualSum(uint8_t arr[], int N)
{
  // Initialise 3 sums to 0
  int sum1, sum2, sum3;
 
  sum1 = sum2 = sum3 = 0;
 
  // Function Call
  if (checkEqualSumUtil(arr, N, sum1,
                        sum2, sum3, 0)== 1)
  {
    printf("YES\n");
  }
  else
  {
    printf("NO\n");
  }
  return current_timestamp();
}
 
// Driver Code
time_t splitter(uint8_t arr[], int N)
{
  printf("%i\n", arr[0]);
  // // Given array arr[]
  // int arr[] = {17, 34, 59, 23, 17, 67,
  //              57, 2, 18, 59, 1 };
 
  // int N = sizeof(arr) / sizeof(arr[0]);
  long init = current_timestamp();
  // Function Call
  long final = checkEqualSum(arr, N);
  printf("init: %li\n", init);
  printf("final: %li\n", final);
  return final - init;
}

int main() {
    printf("WASM READY\n");
    return 1;
}