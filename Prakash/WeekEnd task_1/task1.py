"""
Python Code
"""

def sum(a):
    a.sort()
    b=len(a)
    print("length of array is:",b)
    temp=1
    if (b<=1):
        if(a[0]==1 or a[0]==0 or a[0]<0):
              
            print(1)
              
        else:
             
            print(a[0])
              
    else:
        for i in range (0,b):        
            if(a[i]>temp):
                break
            temp+=a[i] 
              
        print(temp)

        
sum([1,1,1,1,5,10,15,20,100])
sum([5,6,1,1,2,3,4,9])
sum([1,1,1,1,1])
sum([0])
