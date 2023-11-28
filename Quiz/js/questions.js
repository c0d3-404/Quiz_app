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
            `<i><<pre><code class="python">print(2**3 + (5 + 6)**(1 + 1))</code></pre><\i>`,

        answer: "129",
        options: ["129", "8", "121", "None of the above"],
    },
    {
        //q3
        numb: 3,
        question:
            "What will be the datatype of the var in the below code snippet?" +
            `<i><<pre><code class="python">var = 10
        print(type(var))
        var="Hello"
        print(type(var))`,
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
            `<i><<pre><code class="python">a = [1, 2, 3]
            a = tuple(a)
            a[0] = 2
            print(a)`,
        answer: "Error",
        options: ["[2,2,3]", "(2,2,3)", "(1,2,3)", "Error"],
    },
    {
        //q6
        numb: 6,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">print(type(5 / 2))
        print(type(5 // 2))`,
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
            `<i><<pre><code class="python">a = [1, 2, 3, 4, 5]
        sum = 0
        for ele in a:
            sum += ele 
        print(sum)`,
        answer: "float and int",
        options: [
            "float and int",
            "int and float",
            "float and float",
            "int and int",
        ],
    },
    {
        //q8
        numb: 8,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">a = 3
        b = 1 
        print(a, b)
        a, b = b, a 
        print(a, b)`,
        answer: "3 1   1 3",
        options: ["3 1   1 3", "1 3   3 1", "3 1   1 3", "1 3   3 1"],
    },
    {
        //q9
        numb: 9,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">a = [1, 2]
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
            `<i><<pre><code class="python">example = ["Sunday", "Monday", "Tuesday", "Wednesday"];
        del example[2]
        print(example)`,
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
            `<i><<pre><code class="python">numbers = (4, 7, 19, 2, 89, 45, 72, 22)
        sorted_numbers = sorted(numbers)
        print(sorted_numbers)`,
        answer: "List",
        options: ["List", "Tuple", "String", "Int"],
    },
    {
        //q14
        numb: 14,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">def thrive(n):
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
        thrive(39)`,
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
            `<i><<pre><code class="python">numbers = (4, 7, 19, 2, 89, 45, 72, 22)
        sorted_numbers = sorted(numbers)
        even = lambda a: a % 2 == 0
        even_numbers = filter(even, sorted_numbers)
        print(type(even_numbers))`,
        answer: "filter",
        options: ["filter", "int", "list", "tuple"],
    },
    {
        //q16
        numb: 16,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class="python">def check(a):
            print("Even" if a % 2 == 0 else "Odd")
        check(12)`,
        answer: "Even",
        options: ["Even", "Odd", "Error", "None of the above"],
    },
];
