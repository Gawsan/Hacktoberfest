#include <stdio.h>

int main(void) 
{
  int rnom,count;
  char cash,more,type;
  float amount=0.00,bill=0.00;

  do
  {
  printf("Enter your room type : ");
  scanf("%c", &type);
  if(type!='D'&&type!='S'&&type!='C'&&type!='E'&&type!='P')
  {
    printf("Invalid Room Type \n");
    break;
  }

   printf("Enter your number of rooms : ");
   scanf("%d", &rnom);

   printf("Enter your number of nights : ");
   scanf("%d", &count);
  
  
  printf("Enter your payment method[cash-[M] or credit-[C] :  ");
  scanf("%c ", &cash);
    
  

   switch(type)
  {
  case 'D':
  amount=rnom*count*31000.00;
  break;
  case 'S':
  amount=rnom*count*35000.00;
  break;
  case 'C':
  amount=rnom*count*50000.00;
  break;
  case 'E' :
  amount=rnom*count*75000.00;
  break;
  case 'P' :
  amount=rnom*count*100000.00;
  break;
 } 
 if(cash=='C')
  {
    amount=amount*0.9;
    
  }
  bill+=amount;




  printf("Do you Want to continue yes-[Y/y] No-[N/n]:");
   scanf("%c ",&more);
     if(more!='N'||more!='n')
   {
     // puts("-----------------------------------------------");

      break;
   }

  }while(more!='N'||more!='n');

  printf("Total bill is :%.2f \n",bill);


  }

