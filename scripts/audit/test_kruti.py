# Kruti Dev to Unicode mapping test
def kruti_to_unicode(text):
    # Common Kruti Dev mapping table
    # Replace compound characters and matras
    modified_substring = text
    
    kruti_mapping = {
        "ñ": "स्", "Q>": "ट", "Q": "ट", "S>": "ड", "S": "ड", "T": "ठ", "T>": "ठ",
        "U": "ण", "U>": "ण", "V": "त", "W": "थ", "X": "द", "Y": "ध", "Z": "न",
        "n": "प", "’$": "फ़", "’": "फ", "~": "ब", "^": "भ", "‘": "म", "¶": "य",
        "a": "र", "b": "ल", "d": "व", "e": "श", "f": "ष", "g": "स", "h": "ह",
        "H$": "क", "I": "ख", "J": "ग", "K": "घ", "L": "ङ", "M": "च", "N": "छ",
        "O": "ज", "P": "झ", "Q": "ञ",
        "Am": "आ", "B": "इ", "C": "ई", "D": "उ", "E": "ऊ", "F": "ऋ",
        "G": "ए", "H": "ऐ", "I": "ओ", "J": "औ",
        "m": "ा", "s": "ि", "{": "ि", "r": "ी", "w": "ु", "W": "ू",
        "o": "े", "¡": "ै", "mo": "ो", "m¡": "ौ", "§": "ं", "±": "ँ",
        "H": "ः", "्": "्", "·": "ृ", "©": "र्", "&": "।", "h¡": "है"
    }
    return modified_substring

print("Sample test string:", "{S>{OQ>b g{H©$Q> _______ Ho$ ~ma-~ma Cn¶moJ go ~Zm¶m Om gH$Vm h¡&")
