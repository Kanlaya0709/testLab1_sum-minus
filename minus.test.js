const minus = require('./minus');

// 300 - 100 เท่ากับ 200
test('300 - 100 เท่ากับ 200',()=> {
    expect(minus(300,100)).toBe(200);
});

//777 - 777 เท่ากับ 0
test('777 - 777 เท่ากับ 0',()=> {
    expect(minus(777,777)).toBe(0);
});

// 23 - 24 เท่ากับ -1
test('23 - 24 เท่ากับ -1',()=> {
    expect(minus(23,24)).toBe(-1);
});

// 89.1 - 0.1 เท่ากับ 89
test('89.1 - 0.1 เท่ากับ 89',()=> {
    expect(minus(89.1,0.1)).toBe(89);
});

// 45 - 0.5 เท่ากับ 44.5
test('45 - 0.5 เท่ากับ 44.5',()=> {
    expect(minus(45,0.5)).toBe(44.5);
});
