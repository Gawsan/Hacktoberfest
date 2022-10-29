//this program display corresponding total amount that the customer has to pay
#include<stdio.h>
int main(void)

{   
    int packNo;
    float distance,total;
    char yORn;
    do{
    printf("enter the package number: "); //input package number
    scanf("%d",&packNo);
    printf("enter the total distance of the tour in kilometers: ");//input distance in kilometers
    scanf("%f",&distance);
    if ((packNo==1) && (distance>=1))//if distance is grater or equal than 1km when package is 1
    {
       total=(distance-1)*175 +150;  //calculate total when package is 1
       printf("total amount is %f\n",total); //print the total
    }
    else if ((packNo==1) && (distance<1)) //if distance is less than ikm when package is 1
    {   
        total = 150;          //total is the price of 1km in package 1
        printf("total amount is %f\n",total); //print the total
    }
    else if ((packNo==2) && (distance>=1))//if distance is grater or equal than 1km when package is 2
    {
        total=distance*100;
        printf("total amount is %f\n",total);
    }
    else if ((packNo==2) && (distance<1)) //if distance is less than ikm when package is 2
    {
        total=100;                        //total is the price of 1km in package 2
        printf("total amount is %f\n",total);   //print the total
    }
    else if ((packNo==3) && (distance>=1))
    {
        total=(distance-1)*150+130;
        printf("total amount is %f\n",total);
    }
    else if ((packNo==3) && (distance<1))
    {
        total=130;
        printf("total amount is %f\n",total);
    }
    else if ((packNo==4) && (distance>=1))
    {
        total=(distance-1)*130+120;
        printf("total amount is %f\n",total);
    }
    else if ((packNo==4) && (distance<1))
    {
        total=120;
        printf("total amount is %f\n",total);
    }
    else
    {
        printf("Invalid Package Number\n");
    }
    
    printf("Do you have more customers?\n");
    scanf("%c",&yORn);
    if(yORn=='y' || yORn=='Y')
    {
        
        
    }while(yORn!='n'||'N');
    

    }
       
    
        
return 0;
}//end of the main function
    yaa come on well ok 
	you can go any where in my pc mmmm hey shall i go now good boy heeeeeeeeeeeee         eeeee im play boy hahah mmmm nooto da