---
permalink: /interview_questions/python
author_profile: false
layout: single
sidebar:
  nav: "interview_questions"
---

{% include bootstrap_header.html title="Python Interview Questions" %}

<br><h5>Question</h5>
<div class="bs-example dob-question">What are some characteristics of the Python programming language?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

1. It is a high level general purpose programming language created in 1991 by Guido Van Rosum.
2. The language is interpreted, being the CPython (Written in C) the most used/maintained implementation.
3. It is strongly typed. The typing discipline is duck typing and gradual.
4. Python focuses on readability and makes use of whitespaces/identation instead of brackets { }
5. The python package manager is called PIP "pip installs packages", having more than 200.000 available packages.
6. Python comes with pip installed and a big standard library that offers the programmer many precooked solutions.
7. In python **Everything** is an object.

There are many other characteristics but these are the main ones that every python programmer should know.

                    </pre>
                    </code>
   </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What data types supported in Python and which of them are mutable? How can you show that a certain data type is mutable?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

The mutable data types are:

    List
    Dictionary
    Set
    
The immutable data types are:

    Numbers (int, float, ...)
    String
    Bool
    Tuple
    Frozenset

You can usually use the function hash() to check an object mutability, if it is hashable it is immutable, although this does not always work as intended as user defined objects might be mutable and hashable
                    </pre>
                    </code>
   </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is PEP8? Give an example of 3 style guidelines</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

PEP8 is a list of coding conventions and style guidelines for Python

5 style guidelines:

    1. Limit all lines to a maximum of 79 characters.
    2. Surround top-level function and class definitions with two blank lines.
    3. Use commas when making a tuple of one element
    4. Use spaces (and not tabs) for indentation
    5. Use 4 spaces per indentation level
                    </pre>
                    </code>
  </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain inheritance and how to use it in Python</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>


By definition inheritance is the mechanism where an object acts as a base of another object, retaining all its
properties.

So if Class B inherits from Class A, every characteristics from class A will be also available in class B.
Class A would be the 'Base class' and B class would be the 'derived class'.

This comes handy when you have several classes that share the same functionalities.

The basic syntax is:

class Base: pass

class Derived(Base): pass

A more forged example:

class Animal:
    def __init__(self):
        print("and I'm alive!")

    def eat(self, food):
        print("ñom ñom ñom", food)

class Human(Animal):
    def __init__(self, name):
        print('My name is ', name)
        super().__init__()

    def write_poem(self):
        print('Foo bar bar foo foo bar!')

class Dog(Animal):
    def __init__(self, name):
        print('My name is', name)
        super().__init__()

    def bark(self):
        print('woof woof')


michael = Human('Michael')
michael.eat('Spam')
michael.write_poem()

bruno = Dog('Bruno')
bruno.eat('bone')
bruno.bark()

>>> My name is  Michael
>>> and I'm alive!
>>> ñom ñom ñom Spam
>>> Foo bar bar foo foo bar!
>>> My name is Bruno
>>> and I'm alive!
>>> ñom ñom ñom bone
>>> woof woof

Calling super() calls the Base method, thus, calling super().__init__() we called the Animal __init__.

There is a more advanced python feature called MetaClasses that aid the programmer to directly control class creation.


                    </pre>
                    </code>
  </div>



<br><h5>Question</h5>
<div class="bs-example dob-question"> What is an error? What is an exception? What types of exceptions are you familiar with?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

#  Note that you generally don't need to know the compiling process but knowing where everything comes from
#  and giving complete answers shows that you truly know what you are talking about.

Generally, every compiling process have a two steps.
    - Analysis
    - Code Generation.
    
    Analysis can be broken into:
        1. Lexical analysis   (Tokenizes source code)
        2. Syntactic analysis (Check whether the tokens are legal or not, tldr, if syntax is correct)
           
               for i in 'foo'
                          ^
             SyntaxError: invalid syntax
        
        We missed ':'
        
        
        3. Semantic analysis  (Contextual analysis, legal syntax can still trigger errors, did you try to divide by 0,
          hash a mutable object or use an undeclared function?)
          
                 1/0
                ZeroDivisionError: division by zero
        
    These three analysis steps are the responsible for error handlings.
    
    The second step would be responsible for errors, mostly syntax errors, the most common error.
    The third step would be responsible for Exceptions.
    
    As we have seen, Exceptions are semantic errors, there are many builtin Exceptions:
        
        ImportError
        ValueError
        KeyError
        FileNotFoundError
        IndentationError
        IndexError
        ...
    
    You can also have user defined Exceptions that have to inherit from the `Exception` class, directly or indirectly.

    Basic example:
        
    class DividedBy2Error(Exception):
        def __init__(self, message):
            self.message = message
    
    
    def division(dividend,divisor):
        if divisor == 2:
            raise DividedBy2Error('I dont want you to divide by 2!')
        return dividend / divisor
    
    division(100, 2)
    
    >>> __main__.DividedBy2Error: I dont want you to divide by 2!
                    </pre>
                    </code>
  </div>




<br><h5>Question</h5>
<div class="bs-example dob-question">Explain Exception Handling and how to use it in Python</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

                    </pre>
                    </code>
  </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">Write a program which will revert a string (e.g. pizza: azzip)
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
Shortest way is str[::-1] but not the most efficient.

"Classic" way:

foo = ''

for char in 'pizza':
    foo = char + foo

'azzip'   
                    </pre>
                    </code>
  </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How to extract the unique characters from a string? for example given the input "itssssssameeeemarioooooo" the output will be "mrtisaoe"</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
```
x = "itssssssameeeemarioooooo"
y = ''.join(set(x))
```
                    </pre>
                    </code>
                    </div>



<br><h5>Question</h5>
<div class="bs-example dob-question">Write a function to return the sum of one or more numbers. The user will decide how many numbers to use</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
First you ask the user for the amount of numbers that will be use. Use a while loop that runs until amount_of_numbers becomes 0 through subtracting amount_of_numbers by one each loop. In the while loop you want ask the user for a number which will be added a variable each time the loop runs.

def return_sum():
	amount_of_numbers = int(input("How many numbers? "))
	total_sum = 0
	while amount_of_numbers != 0:
		num = int(input("Input a number. "))
		total_sum += num
		amount_of_numbers -= 1
	return total_sum
                    </pre>
                    </code>
   </div>



<br><h5>Question</h5>
<div class="bs-example dob-question">How to merge two sorted lists into one sorted list?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How to merge two dictionaries?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How do you swap values between two variables?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
x, y = y, x
                    </pre>
                    </code>
                    </div>



<br><h5>Question</h5>
<div class="bs-example dob-question">How to check if all the elements in a given lists are unique? so [1, 2, 3] is unique but [1, 1, 2, 3] is not unique but we 1 twice</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What _ is used for in Python?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
1. Translation lookup in i18n
2. Hold the result of the last executed expression or statement in the interactive interpreter.
3. As a general purpose "throwaway" variable name. For example: x, y, _ = get_data() (x and y are used but since we don't care about third variable, we "threw it away").
                    </pre>
                    </code>
                    </div>



<br><h5>Question</h5>
<div class="bs-example dob-question">How to check how much time it took to execute a certain script or block of code?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


##### Algorithms Implementation

<br><h5>Question</h5>
<div class="bs-example dob-question">Can you implement "binary search" in Python?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


##### Files

<br><h5>Question</h5>
<div class="bs-example dob-question">How to write to a file?
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>


with open('file.txt', 'w') as file:
    file.write("My insightful comment")
                    </pre>
                    </code>
  </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How to reverse a file?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


#### Regex

<br><h5>Question</h5>
<div class="bs-example dob-question">How do you perform regular expressions related operations in Python? (match patterns, substitute strings, etc.)</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
Using the re module
                    </pre>
                    </code>
                    </div>



<br><h5>Question</h5>
<div class="bs-example dob-question">How to substitute the string "green" with "blue"?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How to find all the IP addresses in a variable? How to find them in a file?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Sort a list of lists by the second item of each nested list
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
     <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
li = [[1, 4], [2, 1], [3, 9], [4, 2], [4, 5]]
sorted(x, key=lambda l: l[1])
                    </pre>
                    </code>
     </div>



<br><h5>Question</h5>
<div class="bs-example dob-question">Can you write a function which will print all the file in a given directory? including sub-directories</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">You have the following list: <code>[{'name': 'Mario', 'food': ['mushrooms', 'goombas']}, {'name': 'Luigi', 'food': ['mushrooms', 'turtles']}]</code>
  Extract all type of foods. Final output should be: {'mushrooms', 'goombas', 'turtles'}
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

brothers_menu =  \
[{'name': 'Mario', 'food': ['mushrooms', 'goombas']}, {'name': 'Luigi', 'food': ['mushrooms', 'turtles']}]

# "Classic" Way
def get_food(brothers_menu) -> set:
    temp = []

    for brother in brothers_menu:
        for food in brother['food']:
            temp.append(food)

    return set(temp)

# One liner way (Using list comprehension)
set([food for bro in x for food in bro['food']])
                    </pre>
                    </code>
  </div>




<br><h5>Question</h5>
<div class="bs-example dob-question">What is List Comprehension? Is it better than a typical loop? Why? Can you demonstrate how to use it?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How to reverse a string?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>

Shortest way is: <code>my_string[::-1]</code> but it doesn't mean it's the most efficient one. <br>
Cassic way is:
```
def reverse_string(string):
    temp = ""
    for char in string:
        temp =  char + temp
    return temp
```
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How to sort a dictionary by values?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How to sort a dictionary by keys?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain data serialization and how do you perform it with Python</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How do you handle argument parsing in Python?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain what is GIL</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is a generator? Why using generators?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain the following types of methods and how to use them:

  * Static method
  * Class method
  * instance method
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How to reverse a list?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How to combine list of strings into one string with spaces between the strings</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What empty <code>return</code> returns?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<h5>Time Complexity</h5>

<br><h5>Question</h5>
<div class="bs-example dob-question">Describe what would be the time complexity of the operations <code>access</code>, <code>search</code> <code>insert</code> and <code>remove</code> for the following data structures:

  * Stack
  * Queue
  * Linked List
  * Binary Search Tree
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
  </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is the complexity for the best, worst and average cases of each of the following algorithms?:

  * Quick sort
  * Merge sort
  * Bucket Sort
  * Radix Sort
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
   </div>


<a name="python-advanced"></a>
<h5>Advanced Python</h5>

<br><h5>Question</h5>
<div class="bs-example dob-question">Explain what is a decorator</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Can you show how to write and use decorators?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Write a script which will determine if a given host is accessible on a given port</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Are you familiar with Dataclasses? Can you explain what are they used for?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain Context Manager</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain the Buffer Protocol</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain Descriptors</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Do you have experience with web scraping? Can you describe what have you used and for what?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Can you implement Linked List in Python?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">You have created a web page where a user can upload a document. But the function which reads the uploaded files, runs for a long time, based on the document size and user has to wait for the read operation to complete before he/she can continue using the web site. How can you overcome this?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>

</body>
