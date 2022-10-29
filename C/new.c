#include <stdio.h>
int main() {
	//array declaration
	int rollNo[10];
	
	//taking inputs
	for(int i=0;i<10;i++)
	    scanf("%d",&rollNo[i]);
	
	//printing
	for(int i=0;i<10;i++)
	    printf("%d ",rollNo[i]);
	return 0;
}