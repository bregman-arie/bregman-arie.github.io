---
layout: single
title:  "Python: Objects Comparison"
date:   2019-11-18
categories: python
---

One of the most common questions I get asked by python beginners, is “how do you compare between objects of a class?”

To answer this question, let’s have a look on the following class:

```python
class Ball(object):

    def __init__(self, color, size):
        self.color = color
        self.size = size
```

It's a basic class which represents a Ball. The ball has size and color which are the attributes. Two balls are equal if they match in size and color. So red small ball would only match another red small ball.

Now, some python beginners expect the following code to output True:

```python
ball1 = Ball('blue', 'small')
ball2 = Ball('blue', 'small')

print(ball1 == ball2) # Prints False!
```

But it doesn’t compare the balls as we might think it does. What Python is doing is to compare the id of ball1 and ball2, but their ids are actually different

```python
ball1 = Ball('blue')
ball2 = Ball('blue')

print(id(ball1)) # Prints 139765077933328
print(id(ball2)) # Prints 212032429102940 which is different
```

So what would be the right way to compare? Fortunately, Python has several comparison methods just for that.

## Comparison methods

The comparison methods were first introduced in Python 2.1 and they are also called ‘rich comparison methods’ or ‘comparison magic methods’

```python
object.__lt__(self, other) # For x < y
object.__le__(self, other) # For x <= y
object.__eq__(self, other) # For x == y
object.__ne__(self, other) # For x != y OR x <> y
object.__gt__(self, other) # For x > y
object.__ge__(self, other) # For x >= y
```

A few important notes on using these methods:

The most common usage is to return False or True when using one of the rich comparison methods, but you can actually return any value you want, it really depends on the context of how you use them.

If x == y it doesn’t mean that x != y. The best practice is always to define __ne__() if __eq__() was defined.
A rich comparison method may return “NotImplemented” if the operation is not implemented for a given pair of arguments
Let’s  add __eq__ and __ne__ to our ‘Ball’ class:

```python
class Ball(object):

    def __init__(self, color, size):
        self.color = color
        self.size = size

    def __eq__(self, other):
        """Override the default Equals behavior"""
        return self.color == other.color and self.size == other.size

    def __ne__(self, other):
        """Override the default Unequal behavior"""
        return self.color != other.color or self.size != other.size

ball1 = Ball('blue', 'small')
ball2 = Ball('blue', 'small')
ball3 = Ball('green', 'small')

print(ball1 == ball2) # Prints True 🙂
print(ball1 == ball3) # Prints False 🙂
```

That’s better, but still not exactly what we wanted. We added two methods. One for comparing the equality of two  Ball objects and the __ne__  method for inequality.

We said that two balls are equal if they have the  same size and color (and indeed the program output was true when comparing ball1 to ball2) and they are unequal if one of the properties is different (size or color) and in this case also the output was correct (False) for ball1 compared to ball3.

So what is the problem you ask?

A ball is not a box
Let’s say we have this additional class to represent a Box:

```python
class Box(object):

    def __init__(self, color, size):
        self.color = color
        self.size = size

    def __eq__(self, other):
        """Override the default Equals behavior"""
        return self.color == other.color and self.size == other.size

    def __ne__(self, other):
        """Override the default Unequal behavior"""
        return self.color != other.color or self.size != other.size
```

Identical to Ball, except this is a Box 🙂 What will the last line print?

```python
ball1 = Ball('red', 'small')
box1 = Box('red', 'small')

print(ball1 == box1)
```

If you guessed ‘False’ then you are wrong. It will print True. Now you might be sitting your chair screaming “but a box is not a ball!” and the good news are that you absolutely right 🙂

To fix that we need to change our __eq__ and __ne__ methods:

```python
    def __eq__(self, other):
        """Override the default Equals behavior"""
        if isinstance(other, self.__class__):
            return self.color == other.color and self.size == other.size
        return False

    def __ne__(self, other):
        """Override the default Unequal behavior"""
        return self.color != other.color or self.size != other.size
```

We added one simple check to fix the issue: “if isinstance(object, classinfo)” which returns True in case the object is an instance of the classinfo argument. In our case. it will check if a Ball is an instance of a Box or a Ball (depends what we compare against).

Now you may ask yourself “both Box class and Ball class has __eq__ method. Which one is used when comparing?”

The answer is simple – it depends on which one is the first in the comparison. The __eq__ method of the left side operand would be used. Take this lone for example:

```python
print(box1 == ball1)
```

It would run Box class __eq__ method. If it was the ball on the left side (as for ball1 == box1) then it would use the __eq__ method of the Ball class.
