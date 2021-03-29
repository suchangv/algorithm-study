#include <iostream>
#include <cmath>
#include <cassert>
#include <ctime>

using namespace std;

template <typename T>
int binarySearch(T arr[], int n, T target)
{
  int l = 0, r = n - 1; // 在[l...r]的范围里寻找target
  while (l <= n)        // 当l==r时，区间[l...r]依然是有效的
  {
    int mid = l + (r - l) / 2;

    if (arr[mid] > target)
    {
      r = mid - 1; // target在[l,mid-1]中
    }
    else if (arr[mid] < target)
    {
      l = mid + 1; // target在[mid+1...r]中
    }
    else
    {
      return mid;
    }
  }

  return -1;
}

int main()
{
  int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  int length = 10;
  int result = binarySearch(arr, length, 2);
  cout << result << endl;
  return 0;
}