// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "What is the maxismum length of a Python identifier",
        answer: "No fixed length is specified",
        options: ["16", "32", "128", "No fixed length is specified"],
    },
    {
        numb: 2,
        question:
            "What will be the output for the following code snippit?\n" +
            `<i><<pre><code class="python">print(2**3 + (5 + 6)**(1 + 1))</code></pre><\i>`,

        answer: "129",
        options: ["129", "8", "121", "None of the above"],
    },
    {
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
        numb: 4,
        question: "How is a code block indicated in Python?",
        answer: "Indentaion",
        options: ["Brackets", "Indentation", "Hey", "None of the above"],
    },
    {
        numb: 5,
        question:
            "What will be the output of the following code snippet?" +
            `<i><<pre><code class=a = [1, 2, 3]
    a = tuple(a)
    a[0] = 2
    print(a)`,
        answer: "Error",
        options: ["[2,2,3]", "(2,2,3)", "(1,2,3)", "Error"],
    },
    {
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
];
