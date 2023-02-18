#include "pch.h"

#define  CYCLE  1000000                       // ���������� ������  

int rec(int n)
{
	if (n == 1)
	{
		return 1;
	}
	else if (n == 0)
	{
		return 0;
	}
	else
	{
		return rec(n - 1) + rec(n - 2);
	}
}

int main()
{

	double  av1 = 0, av2 = 0;
	clock_t  t1 = 0, t2 = 0;
	clock_t t3 = 0, t4 = 0;

	setlocale(LC_ALL, "rus");
	int num;
	cin >> num;
	auxil::start();                          // ����� ��������� 
	t1 = clock();                            // �������� ������� 
	for (int i = 0; i < CYCLE; i++)
	{
		av1 += (double)auxil::iget(-100, 100); // ����� ��������� ����� 
		av2 += auxil::dget(-100, 100);         // ����� ��������� ����� 
	}
	t2 = clock();                            // �������� ������� 


	std::cout << std::endl << "���������� ������:         " << CYCLE;
	std::cout << std::endl << "������� �������� (int):    " << av1 / CYCLE;
	std::cout << std::endl << "������� �������� (double): " << av2 / CYCLE;
	std::cout << std::endl << "����������������� (�.�):   " << (t2 - t1);
	std::cout << std::endl << "                  (���):   "
		<< ((double)(t2 - t1)) / ((double)CLOCKS_PER_SEC);
	std::cout << std::endl;

	t3 = clock();
	int res = rec(num);
	t4 = clock();

	cout << endl << "����� ���������";
	cout << endl << "����������������� (�.�.):    " << (t4 - t3);
	cout << endl << "                  (���.):    "
		<< ((double)(t4 - t3)) / ((double)CLOCKS_PER_SEC) << endl;
	system("pause");

	return 0;
}