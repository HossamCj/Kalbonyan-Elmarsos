# Has a function named favorite_city
# favorite_city should have one parameter: name
# You should call favorite city at least three times
# The output should include : "One of my favorite cities is"

def favorite_city(name):
    output_message = "One of my favorite cities is: " + name
    return output_message

cairo = favorite_city('Cairo')
alex = favorite_city('Alex')
el_madina = favorite_city('El Madina')

print(cairo)
print(alex)
print(el_madina)

# another way for making it look like the instructor solution 

def my_favorite_city(name):
    print('One of my favorite cities is ', name)
    
my_favorite_city('Shatby beach, Alexandria')
my_favorite_city('Dar El Salam Library, Cairo')
my_favorite_city('Connecticut, In USA')