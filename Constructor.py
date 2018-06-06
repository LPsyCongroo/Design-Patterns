# Python uses a class system for objects

class Car:
  __model = ''
  __year = 0
  __miles = 0

  # Constructor
  def __init__(self, model, year, miles):
    self.__model = model
    self.__year = year
    self.__miles = miles

  def toString(self):
    str = 'This {} {} has done {} miles'
    return str.format(self.__year, self.__model, self.__miles)

corolla = Car('Corolla', 2010, 80000)

print(corolla.toString())                                              