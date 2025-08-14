// Levels 11-20: Maths Questions (Class 8)

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

Object.assign(levels, {
    11: shuffle([
        { question: "12 × 8 = ?", options: ["88", "84", "96"], answer: "96" },
        { question: "125 ÷ 5 = ?", options: ["25", "20", "30"], answer: "25" },
        { question: "Square root of 81 is?", options: ["8", "7", "9"], answer: "9" },
        { question: "15² = ?", options: ["250", "200", "225"], answer: "225" },
        { question: "50% of 200 is?", options: ["50", "100", "150"], answer: "100" },
        { question: "LCM of 4 and 6 is?", options: ["18", "24", "12"], answer: "12" },
        { question: "25 × 4 = ?", options: ["125", "100", "75"], answer: "100" },
        { question: "15 + 27 = ?", options: ["40", "42", "43"], answer: "42" },
        { question: "9 × 9 = ?", options: ["72", "81", "99"], answer: "81" },
        { question: "100 ÷ 4 = ?", options: ["30", "20", "25"], answer: "25" }
    ]),
    12: shuffle([
        { question: "7 × 8 = ?", options: ["64", "48", "56"], answer: "56" },
        { question: "144 ÷ 12 = ?", options: ["14", "10", "12"], answer: "12" },
        { question: "Square of 20 is?", options: ["40", "200", "400"], answer: "400" },
        { question: "10% of 500 is?", options: ["25", "100", "50"], answer: "50" },
        { question: "HCF of 8 and 12 is?", options: ["2", "6", "4"], answer: "4" },
        { question: "13 × 6 = ?", options: ["80", "72", "78"], answer: "78" },
        { question: "50 + 75 = ?", options: ["100", "125", "150"], answer: "125" },
        { question: "14 × 5 = ?", options: ["65", "75", "70"], answer: "70" },
        { question: "225 ÷ 15 = ?", options: ["20", "10", "15"], answer: "15" },
        { question: "Cube of 3 is?", options: ["9", "27", "18"], answer: "27" }
    ]),
    13: shuffle([
        { question: "5 × 16 = ?", options: ["100", "60", "80"], answer: "80" },
        { question: "36 ÷ 6 = ?", options: ["4", "6", "8"], answer: "6" },
        { question: "Square root of 49 is?", options: ["8", "7", "6"], answer: "7" },
        { question: "75% of 200 is?", options: ["100", "125", "150"], answer: "150" },
        { question: "11 × 11 = ?", options: ["111", "144", "121"], answer: "121" },
        { question: "90 ÷ 9 = ?", options: ["11", "9", "10"], answer: "10" },
        { question: "8² = ?", options: ["16", "64", "32"], answer: "64" },
        { question: "20 × 3 = ?", options: ["50", "60", "70"], answer: "60" },
        { question: "Cube root of 27 is?", options: ["9", "3", "6"], answer: "3" },
        { question: "10² = ?", options: ["20", "10", "100"], answer: "100" }
    ]),
    14: shuffle([
        { question: "6 × 7 = ?", options: ["36", "42", "49"], answer: "42" },
        { question: "100 ÷ 5 = ?", options: ["10", "25", "20"], answer: "20" },
        { question: "Square root of 64 is?", options: ["6", "8", "7"], answer: "8" },
        { question: "20% of 300 is?", options: ["80", "60", "50"], answer: "60" },
        { question: "HCF of 15 and 25 is?", options: ["5", "10", "15"], answer: "5" },
        { question: "14 × 3 = ?", options: ["42", "36", "48"], answer: "42" },
        { question: "250 ÷ 25 = ?", options: ["15", "12", "10"], answer: "10" },
        { question: "Square of 9 is?", options: ["99", "18", "81"], answer: "81" },
        { question: "4³ = ?", options: ["64", "12", "16"], answer: "64" },
        { question: "18 + 24 = ?", options: ["44", "42", "48"], answer: "42" }
    ]),
    15: shuffle([
        { question: "9 × 8 = ?", options: ["81", "72", "64"], answer: "72" },
        { question: "81 ÷ 9 = ?", options: ["8", "10", "9"], answer: "9" },
        { question: "Square of 15 is?", options: ["250", "225", "200"], answer: "225" },
        { question: "10% of 900 is?", options: ["80", "100", "90"], answer: "90" },
        { question: "LCM of 5 and 10 is?", options: ["15", "20", "10"], answer: "10" },
        { question: "16 × 4 = ?", options: ["60", "64", "80"], answer: "64" },
        { question: "300 ÷ 25 = ?", options: ["12", "10", "15"], answer: "12" },
        { question: "5³ = ?", options: ["15", "125", "25"], answer: "125" },
        { question: "7² = ?", options: ["14", "49", "21"], answer: "49" },
        { question: "8 + 27 = ?", options: ["36", "35", "33"], answer: "35" }
    ]),
    16: shuffle([
        { question: "8 × 12 = ?", options: ["100", "96", "88"], answer: "96" },
        { question: "144 ÷ 16 = ?", options: ["8", "10", "9"], answer: "9" },
        { question: "Square root of 100 is?", options: ["12", "11", "10"], answer: "10" },
        { question: "30% of 200 is?", options: ["70", "60", "50"], answer: "60" },
        { question: "HCF of 18 and 24 is?", options: ["6", "8", "4"], answer: "6" },
        { question: "15 × 15 = ?", options: ["200", "225", "250"], answer: "225" },
        { question: "400 ÷ 20 = ?", options: ["15", "25", "20"], answer: "20" },
        { question: "Square of 12 is?", options: ["120", "124", "144"], answer: "144" },
        { question: "6³ = ?", options: ["36", "126", "216"], answer: "216" },
        { question: "22 + 18 = ?", options: ["40", "41", "39"], answer: "40" }
    ]),
    17: shuffle([
        { question: "10 × 14 = ?", options: ["130", "140", "150"], answer: "140" },
        { question: "169 ÷ 13 = ?", options: ["12", "14", "13"], answer: "13" },
        { question: "Square root of 121 is?", options: ["10", "12", "11"], answer: "11" },
        { question: "40% of 250 is?", options: ["110", "120", "100"], answer: "100" },
        { question: "LCM of 6 and 8 is?", options: ["16", "12", "24"], answer: "24" },
        { question: "11 × 12 = ?", options: ["120", "133", "132"], answer: "132" },
        { question: "500 ÷ 25 = ?", options: ["25", "20", "15"], answer: "20" },
        { question: "Square of 14 is?", options: ["198", "200", "196"], answer: "196" },
        { question: "7³ = ?", options: ["343", "333", "323"], answer: "343" },
        { question: "30 + 25 = ?", options: ["54", "56", "55"], answer: "55" }
    ]),
    18: shuffle([
        { question: "15 × 8 = ?", options: ["130", "120", "140"], answer: "120" },
        { question: "196 ÷ 14 = ?", options: ["12", "14", "13"], answer: "14" },
        { question: "Square root of 144 is?", options: ["10", "11", "12"], answer: "12" },
        { question: "25% of 160 is?", options: ["50", "45", "40"], answer: "40" },
        { question: "HCF of 9 and 12 is?", options: ["4", "6", "3"], answer: "3" },
        { question: "18 × 5 = ?", options: ["80", "90", "100"], answer: "90" },
        { question: "600 ÷ 30 = ?", options: ["10", "20", "15"], answer: "20" },
        { question: "Square of 11 is?", options: ["121", "120", "122"], answer: "121" },
        { question: "9³ = ?", options: ["729", "720", "700"], answer: "729" },
        { question: "45 + 55 = ?", options: ["110", "100", "105"], answer: "100" }
    ]),
    19: shuffle([
        { question: "20 × 4 = ?", options: ["100", "90", "80"], answer: "80" },
        { question: "256 ÷ 16 = ?", options: ["18", "15", "16"], answer: "16" },
        { question: "Square root of 169 is?", options: ["13", "14", "15"], answer: "13" },
        { question: "60% of 150 is?", options: ["80", "100", "90"], answer: "90" },
        { question: "LCM of 3 and 7 is?", options: ["10", "15", "21"], answer: "21" },
        { question: "22 × 3 = ?", options: ["66", "65", "64"], answer: "66" },
        { question: "700 ÷ 25 = ?", options: ["30", "28", "27"], answer: "28" },
        { question: "Square of 16 is?", options: ["256", "255", "250"], answer: "256" },
        { question: "4³ = ?", options: ["60", "64", "50"], answer: "64" },
        { question: "75 + 25 = ?", options: ["100", "110", "90"], answer: "100" }
    ]),
    20: shuffle([
        { question: "25 × 6 = ?", options: ["130", "140", "150"], answer: "150" },
        { question: "225 ÷ 15 = ?", options: ["10", "15", "20"], answer: "15" },
        { question: "Square root of 196 is?", options: ["15", "14", "16"], answer: "14" },
        { question: "80% of 250 is?", options: ["190", "180", "200"], answer: "200" },
        { question: "HCF of 14 and 21 is?", options: ["8", "6", "7"], answer: "7" },
        { question: "30 × 5 = ?", options: ["160", "150", "140"], answer: "150" },
        { question: "900 ÷ 30 = ?", options: ["40", "30", "20"], answer: "30" },
        { question: "Square of 18 is?", options: ["324", "320", "330"], answer: "324" },
        { question: "5³ = ?", options: ["150", "120", "125"], answer: "125" },
        { question: "60 + 40 = ?", options: ["110", "90", "100"], answer: "100" }
    ])
});
