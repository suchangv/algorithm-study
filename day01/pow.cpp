#include <iostream>
#include <ctime>
#include <cmath>

using namespace std;

double pownlogn(double x, int n) {
    if (n == 0) {
        return 1.0;
    }
    double t = pownlogn(x, n / 2);
    if (n % 2) {
        return x * t * t;
    }
    return t * t;
}

double pown(double x, int n) {
    double sum = 1.0;
    for (int i = 0; i < n; i++) {
        sum = sum * x;
    }
    return sum;
}

int f(int n) {
    if (n == 0) return 1;
    return f(n - 1) + f(n - 1);
}

int main() {

    for (int i = 0; i <= 200; i++) {
        clock_t startTime = clock();
        int result = pownlogn(2, i);
        clock_t endTime = clock();
        cout << "2^" << i << "=" << result << ", nlogn, time = " << double(endTime - startTime) / CLOCKS_PER_SEC << endl;

        startTime = clock();
        result = pown(2, i);
        endTime = clock();
        cout << "2^" << i << "=" << result << ", n, time = " << double(endTime - startTime) / CLOCKS_PER_SEC << endl;

        startTime = clock();
        result = pow(2, i);
        endTime = clock();
        cout << "2^" << i << "=" << result << ", cmath.pow, time = " << double(endTime - startTime) / CLOCKS_PER_SEC << endl;

        // startTime = clock();
        // result = f(i);
        // endTime = clock();
        // cout << i << result << ", f, time = " << double(endTime - startTime) / CLOCKS_PER_SEC << endl;
    }

    return 0;
}