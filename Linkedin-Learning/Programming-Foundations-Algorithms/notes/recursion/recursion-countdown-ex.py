def countdown(x):
    if x == 0:
        print('Done!')
        return
    else:
        print(x, "....")
        countdown(x-1)
        
        # This is going to run after the function finish its circle.
        print('something') 
        
    
countdown(4)