function getNativeName(country) {
    const nativeName = country.name.nativeName;
    const keys = Object.keys(nativeName);
    const firstKey = keys[0];
    if(firstKey) {
        return nativeName[firstKey].official;
    }
}

function getName(country) {
    return country.name.official;
}

function getCallingCode(country) {
    return country.idd.root + country.idd.suffixes[0];
}

function getAltSpellings(country) {
    return country.altSpellings[2] || country.altSpellings[1] || country.altSpellings[0]
}

function parseCountry(country) {
    return {
        ...country,
        name: getName(country),
        nativeName: getNativeName(country),
        idd: getCallingCode(country),
        altSpelling: getAltSpellings(country)
    }
}

export {
    parseCountry
}