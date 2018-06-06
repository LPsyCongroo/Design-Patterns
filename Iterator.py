# import collections.abc

# class ConcreteAggregate(collections.abc.Iterable):
#   """
#   Implement the Iterator creation interface to return an instance of the proper ConcreteIterator
#   """

#   def __init__(self):
#     self._data = None

#   def __iter__(self):
#     return ConcreteIterator(self)

# class ConcreteIterator(collections.abc.Iterator):
#   """
#   Implement the Iterator interface
#   """

#   def __init__(self, concrete_aggregate):
#     self._concrete_aggregate = concrete_aggregate

#   def __next__(self):
#     if True: # if no_elements_to_traverse:
#       raise StopIteration
#     return None # return element


# concrete_aggregate = ConcreteAggregate()
# for _ in concrete_aggregate:
#   print(_)

import random

class DragonArmy:
  def __init__(self):
    self._sizes = ['big', 'medium', 'small']
    self._types = ['water', 'earth', 'fire', 'air']

  def __iter__(self):
    return self

  def __next__(self):
    if random.randint(1,101) > 75:
      raise StopIteration
    
    return self._makeDragon()

  def _makeDragon(self):
    size = self._sizes[random.randint(0, 2)]
    type = self._types[random.randint(0,3)]

    return ' '.join([size, type, 'dragon'])

dragonArmy = DragonArmy()

dragons = []

for dragon in dragonArmy:
  print(dragon)