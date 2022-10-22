export const javascriptTests = [
    {
        id: 1,
        name: "doubleInteger",
        instruction: "i will be an integer. Double it and return it.",
        consoleMessage: "Code as fast as you can! You need to double the integer and return it. To test your code, click Test",
        code : [
            "function doubleInteger(i) {",
            "   ",
            "    return i",
            "}"
        ],
        "tests" : [
            { 
                "param" :  2,   
                "result" : 4,
            },
            { 
                "param" :  4,   
                "result" : 8  
            },
            { 
                "param" :  -10, 
                "result" : -20
            },
            { 
                "param" : 0,  
                "result" : 0 
            },
            { 
                "param" : 100, 
                "result" : 200 
            }
        ]
    },
    {
        id: 2,
        name: "isNumberEven",
        instruction: "i will be an integer. Return true if it's even, and false if it isn't.",
        consoleMessage: "Little bit trickier now. The clock's started ticking again. Return true or false depending on whether the number is even. You can use console.log() and alert(); the results will show up here.",
        code : [
            "function isNumberEven(i) {",
            "   ",
            "   return i",
            "}"
        ],
        tests : [
            { 
                "param" : 2, 
                "result" : true
            },
            { 
                "param" : 3,  
                "result" : false 
            },
            { 
                "param" : 0,   
                "result" : true 
            },
            { 
                "param" : -2, 
                "result" : true
            },
        ]
    },
    {
        id: 3,
        name: "getFileExtension",
        instruction: "i will be a string, but it may not have a file extension. Return the file extension (with no period) if it has one, otherwise false",
        consoleMessage: "Here we go! Given a filename in a string (like 'test.jpg'), return the file extension (like 'jpg'), OR false if it doesn't have one.",
        code : [
            "function getFileExtension(i) {",
            "   ",
            "    return i",
            "}"
        ],
        "tests" : [
            { 
                "param" :  "blatherskite.png",   
                "result" : 'png',
            },
            { 
                "param" :  'perfectlylegal.torrent',   
                "result" : 'torrent'   
            },
            { 
                "param" :  'spaces are fine in file names.txt', 
                "result" : 'txt'
            },
            { 
                "param" : 'this does not have one',  
                "result" : false 
            },
            { 
                "param" : '.htaccess', 
                "result" : 'htaccess' 
            }
        ]
    },
    {
        id: 4,
        name: "longestString",
        instruction: "i will be an array.return the longest string in the array",
        consoleMessage: "Level 4 of 5! You'll get an array. Return the longest string inside it.",
        code : [
            "function longestString(i) {",
            "   ",
            "   return i",
            "}"
        ],
        tests : [
            { 
                "param" : ['a','ab','abc'], 
                "result" : "abc" 
            },
            { 
                "param" : ['big',[0,1,2,3,4],'tiny'],  
                "result" : "tiny" 
            },
            { 
                "param" : ['Hi','World','你好'],   
                "result" : "World" 
            },
            { 
                "param" : [true,false,'lol'], 
                "result" : "lol" 
            },
            { 
                "param" : [{object: true,mainly: 'to confuse you'},'x'], 
                "result" : "x" 
            },
        ]
    },
    {
        id: 5,
        name: "arraySum",
        instruction: "i will be an array, containing integers, strings and/or arrays like itself.Sum all the integers you find, anywhere in the nest of arrays.",
        consoleMessage: "Final challenge! Sum all the integers in a nested array, no matter how many levels deep.",
        code : [
            "function arraySum(i) {",
            "   ",
            "    return i",
            "}"
        ],
        "tests" : [
            { 
                "param" :  2,   
                "result" : 4,
            },
            { 
                "param" :  4,   
                "result" : 16   
            },
            { 
                "param" :  1.5, 
                "result" : 2.25
            },
            { 
                "param" : -12,  
                "result" : 144  
            },
            { 
                "param" : -1.5, 
                "result" : 2.25 
            }
        ]
    },
]