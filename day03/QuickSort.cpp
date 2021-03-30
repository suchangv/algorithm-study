#include <iostream>
#include <ctime>
#include <cmath>

using namespace std;

int *generateRandodmArray(int n, int min, int max)
{
  int *arr = new int[n];

  srand(time(NULL));

  for (int i = 0; i < n; i++)
  {
    arr[i] = rand() % (max - min + 1) + min;
  }

  return arr;
}

void swap(int *arr, int i, int j)
{
  int temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

void quickSort(int *arr, int low, int high)
{
  if (low >= high)
    return;

  int l = low,
      h = high,
      key = low;

  while (l < h)
  {
    if (arr[l] > arr[key] && arr[h] < arr[key])
    {
      swap(arr, l, h);
      l++, h--;
    }

    if (arr[l] <= arr[key])
    {
      l++;
    }

    if (arr[h] >= arr[key])
    {
      h--;
    }
  }

  swap(arr, key, h);

  quickSort(arr, low, h);
  quickSort(arr, l, high);
}

int main()
{
  for (int i = 10; i < 26; i++)
  {
    int n = pow(2, i);
    int *arr = generateRandodmArray(n, 0, 10000);

    clock_t startTime = clock_t();
    quickSort(arr, 0, n);
    clock_t endTime = clock_t();

    delete[] arr;
    // cout << "2^" << i << " time = " << double(endTime - startTime) / CLOCKS_PER_SEC;
  }
}