#include <iostream>
#include "./vertor.h"

using namespace std;

int main() {
  cout<<"Hello world!"<<endl;

  MyVector<int> *vertor = new MyVector<int>();
  vertor->push_back(1);
  vertor->push_back(2);

  for(int i = 3; i < 100; i++) {
    vertor->push_back(i);
  }

  for(int i = 0; i < 100; i++) {
    int result = vertor->pop_back();
    // cout<<result<<endl;
  }

  // vertor->show();

  cout<<resizeCount<<endl;

  return 0;
}