#include <iostream>
using namespace std;
class employee
{
private:
    int id;

public:
    void getdata()
    {
        cout << "enter the employee id=";
        cin >> id;
    }
    void putdata()
    {
        cout << "the id=" << id;
    }
};
int main()
{
    employee e;
    e.getdata();
    e.putdata();
}
