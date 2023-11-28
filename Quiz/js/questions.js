// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        //q1
        numb: 1,
        question: "What is the maximum length of a Python identifier",
        answer: "No fixed length is specified",
        options: ["16", "32", "128", "No fixed length is specified"],
    },
    {
        //q2
        numb: 2,
        question:
            "What will be the output for the following code snippit?\n" +
            `<i><<pre><code class="python">
            print(2**3 + (5 + 6)**(1 + 1))
            </code></pre><\i>`,

        answer: "129",
        options: ["129", "8", "121", "None of the above"],
    },
    {
        //q3
        numb: 3,
        question:
            "What will be the datatype of the var in the below code snippet?" +
            `<i><<pre><code class="python">
            var = 10
            print(type(var))
            var="Hello"
            print(type(var))
            </code></pre><\i>`,
        answer: "int and str",
        options: ["str and int", "int and int", "str and str", "int and str"],
    },
    {
        //q4
        numb: 4,
        question: "How is a code block indicated in Python?",
        answer: "Indentaion",
        options: ["Brackets", "Indentation", "Hey", "None of the above"],
    },
    {
        //q5
        numb: 5,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            a = [1, 2, 3]
            a = tuple(a)
            a[0] = 2
            print(a)
            </code></pre><\i>`,
        answer: "Error",
        options: ["[2,2,3]", "(2,2,3)", "(1,2,3)", "Error"],
    },
    {
        //q6
        numb: 6,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            print(type(5 / 2))
            print(type(5 // 2))
            </code></pre><\i>`,
        answer: "float and int",
        options: [
            "float and int",
            "int and float",
            "float and float",
            "int and int",
        ],
    },
    {
        //q7
        numb: 7,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            a = [1, 2, 3, 4, 5]
            sum = 0
            for ele in a:
                sum += ele 
            print(sum)
            </code></pre><\i>`,
        answer: "15",
        options: ["`15`", "0", "20", "None of the above"],
    },
    {
        //q8
        numb: 8,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            a= 3
            b = 1 
            print(a, b)
            a, b = b, a 
            print(a, b)
            </code></pre><\i>`,
        answer: "3 1   1 3",
        options: ["3 1   1 3", "1 3   3 1", "3 1   1 3", "1 3   3 1"],
    },
    {
        //q9
        numb: 9,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            a = [1, 2]
            print(a * 3)`,
        answer: "[1,2,1,2,1,2]",
        options: ["Error", "[1,2]", "[3,6]", "[1,2,1,2,1,2]"],
    },
    {
        //q10
        numb: 10,
        question:
            "Which of the following types of loops are not supported in Python?",
        answer: "do-while",
        options: ["for", "while", "do-while", "none of the above"],
    },
    {
        //q11
        numb: 11,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            example = ["Sunday", "Monday", "Tuesday", "Wednesday"];
            del example[2]
            print(example)
            </code></pre><\i>`,
        answer: "['Sunday','Monday', 'Wednesday']",
        options: [
            "['Sunday', 'Monday', 'Tuesday', 'Wednesday']",
            "['Sunday', 'Monday', 'Wednesday']",
            "['Monday', 'Tuesday', 'Wednesday']",
            "['Sunday', 'Monday', 'Tuesday']",
        ],
    },
    {
        //q12
        numb: 12,
        question:
            "Which of the following is the proper syntax to check if a particular element is present in a list?",
        answer: "All of the above",
        options: [
            "if ele in list",
            "if not ele not in list",
            "All of the above",
            "None of the above",
        ],
    },
    {
        //q13
        numb: 13,
        question:
            "What will be the type of the variable sorted_numbers in the below code snippet?" +
            `<i><<pre><code class="python">
            numbers = (4, 7, 19, 2, 89, 45, 72, 22)
            sorted_numbers = sorted(numbers)
            print(sorted_numbers)
            </code></pre><\i>`,
        answer: "List",
        options: ["List", "Tuple", "String", "Int"],
    },
    {
        //q14
        numb: 14,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            def thrive(n):
                if n % 15 == 0:
                    print("thrive", end = “ ”)
                elif n % 3 != 0 and n % 5 != 0:
                    print("neither", end = “ ”)
                elif n % 3 == 0:
                    print("three", end = “ ”)
                elif n % 5 == 0:
                    print("five", end = “ ”)
            thrive(35)
            thrive(56)
            thrive(15)
            thrive(39)
            </code></pre><\i>`,
        answer: "five neither thrive three",
        options: [
            "five neither thrive three",
            "five neither three thrive",
            "three three three three",
            "five neither five neither",
        ],
    },
    {
        //q15
        numb: 15,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            numbers = (4, 7, 19, 2, 89, 45, 72, 22)
            sorted_numbers = sorted(numbers)
            even = lambda a: a % 2 == 0
            even_numbers = filter(even, sorted_numbers)
            print(type(even_numbers))
            </code></pre><\i>`,
        answer: "filter",
        options: ["filter", "int", "list", "tuple"],
    },
    {
        //q16
        numb: 16,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            def check(a):
                print("Even" if a % 2 == 0 else "Odd")
            check(12)
            </code></pre><\i>`,
        answer: "Even",
        options: ["Even", "Odd", "Error", "None of the above"],
    },
    {
        //q17
        numb: 17,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            numbers = (4, 7, 19, 2, 89, 45, 72, 22)
            sorted_numbers = sorted(numbers)
            odd_numbers = [x for x in sorted_numbers if x % 2 != 0]
            print(odd_numbers)
            </code></pre><\i>`,
        answer: "[7,19,45,89]",
        options: [
            "[7,19,45,89]",
            "[2,4,22,72]",
            "[4,7,19,2,89,45,72,22]",
            "[2,4,7,19,22,45,72,89]",
        ],
    },
    {
        //q18
        numb: 18,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            example = ["Sunday", "Monday", "Tuesday", "Wednesday"];
            print(example[-3:-1])
            </code></pre><\i>`,
        answer: "['Monday','Tuesday']",
        options: [
            "['Monday','Tuesday']",
            "['Sunday','Monday']",
            "['Tuesday','Wednesday']",
            "['Wednesday','Monday']",
        ],
    },
    {
        //q19
        numb: 19,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            def is_even(number):
                message =  f"{number} is an even number" \ \n
                    if number % 2 == 0 \ \n
                        else  f"{number} is an odd number"
                return message
            print(is_even(54))
            </code></pre><\i>`,
        answer: "54 is an even number",
        options: [
            "54 is an even number",
            "54 is an odd number",
            "number is an even number",
            "number is an odd number",
        ],
    },
    {
        //q20
        numb: 20,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            dict1 = {'first' : 'sunday', 'second' : 'monday'}
            dict2 = {1: 3, 2: 4}
            dict1.update(dict2)
            print(dict1)
            </code></pre><\i>`,
        answer: "{'first': 'sunday', 'second': 'monday', 1: 3 :2: 4}",
        options: [
            "{'first': 'sunday', 'second': 'monday', 1: 3 :2: 4}",
            "{'first': 'sunday', 'second': 'monday'}",
            "{1: 3 :2: 4}",
            "None of the above",
        ],
    },
    {
        //q21
        numb: 21,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            s = {1, 2, 3, 3, 2, 4, 5, 5}
            print(s)
            </code></pre><\i>`,
        answer: "{1, 2, 3, 4, 5}",
        options: [
            "{1, 2, 3, 3, 2, 4, 5, 5}",
            "{1, 2, 3, 4, 5}",
            "{1, 5}",
            "None of the above",
        ],
    },
    {
        //q22
        numb: 22,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            a = {'Hello':'World', 'First': 1}
            b = {val: k for k , val in a.items()}
            print(b)
            </code></pre><\i>`,
        answer: "{1, 2, 3, 4, 5,}",
        options: [
            "{'Hello':'World', 'First': 1}",
            "{'World': 'Hello', 1: 'First}",
            "All of the above",
            "None of the above",
        ],
    },
    {
        //q23
        numb: 23,
        question:
            "Which of the following functions converts date to corresponding time in Python?",
        answer: "strptime()",
        options: [
            "strptime()",
            "strftime()",
            "All of the above",
            "None of the above",
        ],
    },
    {
        //q24
        numb: 24,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            word = "Python Programming"
            n = len(word)
            word1 = word.upper()
            word2 = word.lower()
            converted_word = ""
            for i in range(n):
                if i % 2 == 0:
                    converted_word += word2[i]
                else:
                    converted_word += word1[i]
            print(converted_word)
            </code></pre><\i>`,
        answer: "pYtHoN PrOgRaMmInG",
        options: [
            "pYtHoN PrOgRaMmInG",
            "Python Progamming",
            "python programing",
            "PYTHON PROGRAMMING",
        ],
    },
    {
        //q25
        numb: 25,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            a = "4, 5"
            nums = a.split(',')
            x, y = nums
            int_prod = int(x) * int(y)
            print(int_prod)
            </code></pre><\i>`,
        answer: "20",
        options: ["20", "45", "54", "4,5"],
    },
    {
        //q26
        numb: 26,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            square = lambda x: x ** 2
            a = []
            for i in range(5):
            a.append(square(i))
            
            print(a)
            </code></pre><\i>`,
        answer: "[0,1,4,9,16]",
        options: [
            "[0,1,4,9,16]",
            "[1,4,9,16,25]",
            "[0,1,2,3,4]",
            "[1,2,3,4,5]",
        ],
    },
    {
        //q27
        numb: 27,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            def tester(*argv):
                for arg in argv:
                    print(arg, end = ' ')
            tester('Sunday', 'Monday', 'Tuesday', 'Wednesday')
            </code></pre><\i>`,
        answer: "Sunday Monday Tuesday Wednesday",
        options: [
            "Sunday",
            "Wednesday",
            "Sunday Monday Tuesday Wednesday",
            "None of the above",
        ],
    },
    {
        //q28
        numb: 28,
        question:
            "What datatype are the *args stored, when passed into a function?",
        answer: "Tuple",
        options: ["List", "Tuple", "Dictionary", "None of the above"],
    },
    {
        //q29
        numb: 29,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">
            def tester(**kwargv):
                for key, value in kwargs.items():
                    print(key, value, end = " ")
            tester(Sunday = 1, Monday = 2, Tuesday = 3, Wednesday = 4)
            </code></pre><\i>`,
        answer: "Sunday 1 Monday 2 Tuesday 3 Wednesday 4",
        options: [
            "Sunday 1 Monday 2 Tuesday 3 Wednesday 4",
            "Sunday 1",
            "Wednesday 4",
            "None of the above",
        ],
    },
    {
        //q30
        numb: 30,
        question:
            "What datatype are the *kwargs stored, when passed into a function?",
        answer: "Dictionary",
        options: ["List", "Tuple", "Dictionary", "None of the above"],
    },
    {
        //q31
        numb: 31,
        question:
            "Which of the following blocks will always be executed whether an exception is encountered or not in a program?",
        answer: "finally",
        options: ["try", "except", "finally", "none of the above"],
    },
];
