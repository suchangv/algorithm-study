#include <iostream>

using namespace std;

int resizeCount = 0;

template <typename T>
class MyVector {
  private:
    T* data;
    int capacity;   // 存储数组中可以容纳的最大的元素个数
    int size;       // 存储数组中的元素个数

    // O(n)
    void resize(int newCapacity) {

      resizeCount++;

      assert( newCapacity >= size );

      cout<<"oldCapacity : "<<capacity<<"newCapacity : "<<newCapacity<<endl;

      T *newData = new T[newCapacity];
      for(int i = 0; i < size; i++) {
        newData[i] = data[i];
      }
      delete[] data;

      data = newData;
      capacity = newCapacity;
    }

  public:
    MyVector() {
      data = new T[10];
      capacity = 10;
      size = 0;
    }

    ~MyVector() {
      delete[] data;
    }

    // O(1)
    void push_back(T e) {
      // assert( size < capacity );
      if( size == capacity ) {
        resize( 2*capacity );
      }
      data[size++] = e;
    }

    // O(1) 删除到一定程度是否要缩小空间
    T pop_back() {
      T ret = data[size-1];
      size--;

      // 会产生复杂度震荡 
      // 如果在data临界点不停的删除元素增加元素，会产生复杂度震荡
      // 无法均摊，复杂度为O(n)
      // 所以我们留出一定的空间，防止复杂度震荡
      if(size == capacity / 4){
        resize(capacity / 2); 
      }
      return ret;
    }

    void show() {
      for(int i = 0; i < size; i++) {
        cout<<i<<" : "<<data[i]<<endl;
      }
    }
};