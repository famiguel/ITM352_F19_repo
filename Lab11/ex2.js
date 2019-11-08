attributes = "Faye;10;10.5;-9.5";
theSeparator = ';';
    parts = attributes.split(theSeparator);

    //partts = ['Faye',21,business];

    for (i=0; i < parts.length; i++) {
        console.log(`${parts[i]} isNonNegInt ${isNonNegInt(parts[i],true)}`);
    }

    console.log(parts.join(theSeparator));

    function isNonNegInt(q, return_errors = false) {
        errors = []; // assume no errors at first
        if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
        if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
        if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
        return return_errors ? errors : (errors.length == 0);
    }