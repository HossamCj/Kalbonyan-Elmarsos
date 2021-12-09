# Using recursion to implement power and factorial functions


def power(num, pwr):
    if pwr == 0:
        return 1
    else:
        return num * power(num, pwr-1)


def factorial(num):
    if num == 0:
        return 1
    else:
        return num * factorial(num-1)


print("{} to the power of {} is {}".format(5, 3, power(5, 3)))
print("{} to the power of {} is {}".format(1, 5, power(1, 5)))
print("{}! is {}".format(4, factorial(4)))
print("{}! is {}".format(0, factorial(0)))


# ZeroWebSchool Example
def cleanword(word):

    if len(word) == 1:
        return word
    
    if word[0] == word[1]:
        return cleanword(word[1:])

    return word[0] + cleanword(word[1:])


print(cleanword('wwwoorrrllldd'))


def efun(num):
    if num==0:
         return 1
    else:
        return num * efun(num-2)
    
print(efun(8))


 
 