import random


game_name="""
  _   _                 _               
 | \ | |               | |              
 |  \| |_   _ _ __ ___ | |__   ___ _ __ 
 | . ` | | | | '_ ` _ \| '_ \ / _ \ '__|
 | |\  | |_| | | | | | | |_) |  __/ |   
 |_| \_|\__,_|_| |_| |_|_.__/ \___|_|   
                                        
                                        
    _____                     _             
  / ____|                   (_)            
 | |  __ _   _  ___  ___ ___ _ _ __   __ _ 
 | | |_ | | | |/ _ \/ __/ __| | '_ \ / _` |
 | |__| | |_| |  __/\__ \__ \ | | | | (_| |
  \_____|\__,_|\___||___/___/_|_| |_|\__, |
                                      __/ |
                                     |___/    
                                     
                                     
    _____                      
  / ____|                     
 | |  __  __ _ _ __ ___   ___ 
 | | |_ |/ _` | '_ ` _ \ / _ ⎫
 | |__| | (_| | | | | | |  __/
  \_____|\__,_|_| |_| |_|\___|
                              
                                           """
congratulations="""
   _____                            _         _       _   _                 
  / ____|                          | |       | |     | | (_)                
 | |     ___  _ __   __ _ _ __ __ _| |_ _   _| | __ _| |_ _  ___  _ __  ___ 
 | |    / _ \| '_ \ / _` | '__/ _` | __| | | | |/ _` | __| |/ _ \| '_ \/ __|
 | |___| (_) | | | | (_| | | | (_| | |_| |_| | | (_| | |_| | (_) | | | \__ ⎫
  \_____\___/|_| |_|\__, |_|  \__,_|\__|\__,_|_|\__,_|\__|_|\___/|_| |_|___/
                     __/ |                                                  
                    |___/                                                   """
oops="""
   ____                  _                                       
  / __ \                | |                                      
 | |  | | ___  _ __  ___| |                                      
 | |  | |/ _ \| '_ \/ __| |                                      
 | |__| | (_) | |_) \__ \_|                                      
  \____/_\___/| .__/|___(_)         _     _   _                _ 
 |__   __|    | |                  | |   | | (_)              | |
    | |_ __ _ |_|   _ __   _____  _| |_  | |_ _ _ __ ___   ___| |
    | | '__| | | | | '_ \ / _ \ \/ / __| | __| | '_ ` _ \ / _ \ |
    | | |  | |_| | | | | |  __/>  <| |_  | |_| | | | | | |  __/_|
    |_|_|   \__, | |_| |_|\___/_/\_|__|  \___|_|_| |_| |_|\___(_)
             __/ |                                               
            |___/                                                """
print(game_name)
print("Rules:")
print("* You have to guess the number the program has generated in 10 guesses *")
print("* You start with a score of 10 *")
print("* Each wrong guess decreases your score by 1 *")
print("* You will be given a hint on every wrong guess you make *")
print("\n\n")
n=random.randint(1,100)
score=10

guess=int(input("Enter your guess: "))
if guess==n:
    print("Congratulations!! Your guess is correct!\n")
    print("Your score is ",score)
    print(congratulations)
    print("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")
    print("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")
    exit()
else:
    if (guess%2==n%2==0):
        print("Good going, the number is even!")
    elif (guess%2==n%2!=0):
        print("Good going, the number is odd!")
    elif (guess%2!=n%2!=0):
        print("The number is odd!")
    else:
        print("The number is even!")
    score-=1
    print("Your score is ",score)
    print("\n")
    print("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")    
    has_multiple=False
    multiples=[]
    for j in range(2,int(n**(1/2))):
        if n%j==0:
            multiples.append(j)
            has_multiple=True
    for i in range(1,score+1):
        guess=int(input("Enter your guess: "))
        if guess==n:
            print("Congratulations!! Your guess is correct!\n")
            print("Your score is ",score)
            print(congratulations)
            print("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")
            print("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")
            exit()
        else:
            score-=1
            print("You have ",score," guesses left\n")
            if len(multiples)!=0:
                print("The number is a multiple of",multiples[0])
                multiples.pop(0)
                continue
                print("\n")
            if guess>n:
                print("Your guess is greater than the number\n")
            elif guess<n:
                print("Your guess is lesser than the number\n")
        print("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")
    if score==0:
        print("The number was ",n,"\n")
        print(oops)
