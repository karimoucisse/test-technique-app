export const test = [
    {
        id: 1,
        name: "doubleInteger",
        instruction: "i will be an integer. Double it and return it.",
        code : [
            "function doubleInteger(i) {",
            "   ",
            "    return i",
            "};"
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
        code : [
            "function isNumberEven(i) {",
            "   ",
            "   return i",
            "};"
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
        code : [
            "function getFileExtension(i) {",
            "   ",
            "    return i",
            "};"
        ],
        "tests" : [
            { 
                "param" :  'blatherskite.png',   
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
        code : [
            "function longestString(i) {",
            "   ",
            "   return i",
            "};"
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
        code : [
            "function arraySum(i) {",
            "   ",
            "    return i",
            "};"
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